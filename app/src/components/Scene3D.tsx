"use client";

import { useRef, useMemo, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  Float,
  MeshReflectorMaterial,
} from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  Vignette,
  Noise,
} from "@react-three/postprocessing";
import * as THREE from "three";

/* ── Mouse-tracked camera rig ─────────────────────────── */
function CameraRig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  const onPointerMove = useCallback((e: PointerEvent) => {
    mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
    mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
  }, []);

  useFrame(() => {
    if (group.current) {
      // Smooth lerp toward mouse position — max ~0.8 degrees
      group.current.rotation.y +=
        (mouse.current.x * 0.014 - group.current.rotation.y) * 0.05;
      group.current.rotation.x +=
        (-mouse.current.y * 0.008 - group.current.rotation.x) * 0.05;
    }
  });

  return (
    <group
      ref={group}
      onPointerMove={onPointerMove}
      // Capture pointer events on the canvas for parallax
    >
      {children}
    </group>
  );
}

/* ── Animated Torus Knot ──────────────────────────────── */
function SpiralModel({
  position,
  scale,
  speed,
  color = "#797979",
}: {
  position: [number, number, number];
  scale: number;
  speed: number;
  color?: string;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
      ref.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
      <mesh ref={ref} position={position} scale={scale}>
        <torusKnotGeometry args={[1, 0.28, 128, 16, 2, 3]} />
        <meshStandardMaterial
          color={color}
          metalness={1}
          roughness={0.25}
          envMapIntensity={0.6}
        />
      </mesh>
    </Float>
  );
}

/* ── Smaller decorative torus ────────────────────────── */
function SmallTorus({
  position,
  speed,
}: {
  position: [number, number, number];
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * speed * 0.5;
      ref.current.rotation.z = state.clock.elapsedTime * speed * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={ref} position={position}>
        <torusGeometry args={[0.4, 0.12, 32, 64]} />
        <meshStandardMaterial
          color="#5a5a5a"
          metalness={0.9}
          roughness={0.3}
          envMapIntensity={0.4}
        />
      </mesh>
    </Float>
  );
}

/* ── Reflective Sphere ───────────────────────────────── */
function ReflectiveSphere({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <Float speed={0.8} rotationIntensity={0} floatIntensity={0.3}>
      <mesh ref={ref} position={position}>
        <sphereGeometry args={[0.5, 64, 64]} />
        <meshPhysicalMaterial
          color="#8d8d8d"
          metalness={1}
          roughness={0.35}
          envMapIntensity={0.3}
          clearcoat={0.5}
          clearcoatRoughness={0.15}
        />
      </mesh>
    </Float>
  );
}

/* ── Floating ring particles ────────────────────────── */
function FloatingRings({ count = 6 }: { count?: number }) {
  const rings = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        -3 - Math.random() * 8,
      ] as [number, number, number],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        0,
      ] as [number, number, number],
      scale: 0.15 + Math.random() * 0.25,
      speed: 0.2 + Math.random() * 0.4,
    }));
  }, [count]);

  return (
    <>
      {rings.map((ring, i) => (
        <Float key={i} speed={ring.speed} rotationIntensity={0.5} floatIntensity={0.3}>
          <mesh position={ring.position} rotation={ring.rotation} scale={ring.scale}>
            <ringGeometry args={[0.8, 1, 64]} />
            <meshStandardMaterial
              color="#4a4a4a"
              metalness={0.8}
              roughness={0.4}
              side={THREE.DoubleSide}
              transparent
              opacity={0.6}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

/* ── Ground plane with reflection ───────────────────── */
function ReflectiveFloor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.5, 0]}>
      <planeGeometry args={[60, 60]} />
      <MeshReflectorMaterial
        blur={[300, 100]}
        resolution={1024}
        mixBlur={1}
        mixStrength={35}
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#030303"
        metalness={0.5}
      />
    </mesh>
  );
}

/* ── Moving spotlights ──────────────────────────────── */
function MovingSpotlight({
  offset = 0,
  color = "#ffffff",
}: {
  offset?: number;
  color?: string;
}) {
  const ref = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.x =
        Math.sin(state.clock.elapsedTime * 0.25 + offset) * 5;
      ref.current.position.y =
        Math.cos(state.clock.elapsedTime * 0.18 + offset) * 3.5;
      ref.current.position.z =
        2 + Math.sin(state.clock.elapsedTime * 0.15 + offset) * 2;
    }
  });

  return (
    <pointLight
      ref={ref}
      position={[3, 3, 4]}
      intensity={12}
      distance={18}
      color={color}
    />
  );
}

/* ── Scene composition ──────────────────────────────── */
function Scene() {
  return (
    <CameraRig>
      {/* Lighting */}
      <ambientLight intensity={0.4} color="#ffffff" />
      <directionalLight position={[4, 5, 4]} intensity={1.8} color="#ffffff" />
      <directionalLight position={[-3, -1, 3]} intensity={0.8} color="#ffffff" />
      <MovingSpotlight offset={0} />
      <MovingSpotlight offset={Math.PI} />
      <MovingSpotlight offset={Math.PI / 2} color="#e8e0ff" />

      {/* Background */}
      <mesh position={[0, 0, -12]}>
        <planeGeometry args={[35, 20]} />
        <meshStandardMaterial color="#111111" roughness={0.7} metalness={0.3} />
      </mesh>

      {/* Main models */}
      <group scale={2.2} position={[-1.5, 0, -1]}>
        <SpiralModel position={[0, 0.3, 0]} scale={1} speed={0.5} />
      </group>

      <group scale={3.5} position={[2, -0.5, -6]}>
        <SpiralModel position={[0, 0, 0]} scale={0.7} speed={0.35} color="#6a6a6a" />
      </group>

      {/* Decorative elements */}
      <SmallTorus position={[-4, 2, -3]} speed={0.6} />
      <SmallTorus position={[4.5, -1, -4]} speed={0.45} />
      <SmallTorus position={[1, -2.5, -2]} speed={0.55} />

      {/* Reflective sphere */}
      <ReflectiveSphere position={[3.5, 1.5, -1.5]} />

      {/* Floating rings */}
      <FloatingRings count={8} />

      {/* Floor */}
      <ReflectiveFloor />

      {/* Environment */}
      <Environment preset="studio" environmentIntensity={0.12} />

      {/* Post-processing */}
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.85}
          luminanceSmoothing={0.4}
          intensity={1.0}
          mipmapBlur
        />
        <Noise opacity={0.12} />
        <Vignette offset={0.3} darkness={0.7} />
      </EffectComposer>
    </CameraRig>
  );
}

export default function Scene3D() {
  return (
    <div
      className="fixed inset-0 z-[-1]"
      style={{
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 30, near: 0.1, far: 1000 }}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
        dpr={[1, 1.5]}
        style={{ pointerEvents: "auto" }}
      >
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#000000", 10, 22]} />
        <Scene />
      </Canvas>
    </div>
  );
}
