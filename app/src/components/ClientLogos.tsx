"use client";

const logos: Record<string, React.ReactNode> = {
  Stripe: (
    <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M55.5 20.5c0-4.5 3.7-6.3 9.8-6.3 8.8 0 20 2.7 28.8 7.4V7.2C85.4 4.1 75.2 2.5 65.3 2.5 48.6 2.5 39 9.2 39 20.2c0 14.8 20.5 12.4 20.5 18.8 0 5.1-4.4 6.7-10.5 6.7-9.1 0-21-3.7-30.3-8.9v14c9.2 4.2 18.5 6.2 29.9 6.2 17.4 0 29.3-8.1 29.3-20.1 0-16-20.5-13.4-20.5-19.4z" fill="currentColor"/>
      <text x="0" y="14" fill="currentColor" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="600" letterSpacing="2">STRIPE</text>
    </svg>
  ),
  Vercel: (
    <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="60,6 40,34 80,34" fill="currentColor"/>
      <text x="85" y="24" fill="currentColor" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="500">Vercel</text>
    </svg>
  ),
  Linear: (
    <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 8l-8 24h6l1.5-5h8L29 32h6L27 8h-7zm2.5 5.5l3 10h-6l3-10z" fill="currentColor"/>
      <text x="38" y="24" fill="currentColor" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="500">Linear</text>
    </svg>
  ),
  Notion: (
    <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="6" width="24" height="28" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/>
      <line x1="18" y1="12" x2="30" y2="12" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="18" y1="17" x2="30" y2="17" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="18" y1="22" x2="26" y2="22" stroke="currentColor" strokeWidth="1.5"/>
      <text x="42" y="24" fill="currentColor" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="500">Notion</text>
    </svg>
  ),
  Figma: (
    <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="10" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="22" cy="20" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="22" cy="30" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="32" cy="10" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="32" cy="20" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
      <text x="44" y="24" fill="currentColor" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="500">Figma</text>
    </svg>
  ),
  Resend: (
    <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 12h20v2H14v-2zm0 6h16v2H14v-2zm0 6h12v2H14v-2z" fill="currentColor" opacity="0.3"/>
      <path d="M14 8l14 12-14 12V8z" fill="currentColor"/>
      <text x="36" y="24" fill="currentColor" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="500">Resend</text>
    </svg>
  ),
  Raycast: (
    <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 28l8-16 8 16H14z" fill="currentColor" opacity="0.4"/>
      <path d="M22 12l8 16H14l8-16z" fill="currentColor"/>
      <text x="38" y="24" fill="currentColor" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="500">Raycast</text>
    </svg>
  ),
  Arc: (
    <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 30c0-8.3 5.4-15 12-15s12 6.7 12 15" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <circle cx="30" cy="15" r="4" fill="currentColor"/>
      <text x="48" y="24" fill="currentColor" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="500">Arc</text>
    </svg>
  ),
};

export default logos;
