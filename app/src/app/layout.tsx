import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Studio — AI-Powered Design for Startups",
  description:
    "An international design studio powered end-to-end by AI. We build go-to-market landing pages that ship in days, not months.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Studio — AI-Powered Design for Startups",
    description:
      "An international design studio powered end-to-end by AI. We build go-to-market landing pages that ship in days, not months.",
    images: ["/og-image.svg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio — AI-Powered Design for Startups",
    description:
      "An international design studio powered end-to-end by AI. We build go-to-market landing pages that ship in days, not months.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
