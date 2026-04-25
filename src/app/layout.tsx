import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Beaudent Dental Care | Expert Endodontist in Baner, Pune",
  description: "Dr. Ankita Nagrani (Endodontist), 8-10 Years Experience. Located at ABIL Imperial Commercial Spaces, Baner, Pune. Specialist for painless root canal and laser dentistry.",
  keywords: "Dr. Ankita Nagrani, Endodontist, Beaudent Dental Care, Baner Pune, Root Canal Specialist, Laser Dentistry Pune, 3D Scanning Dental",
  authors: [{ name: "Dr. Ankita Nagrani" }],
  creator: "Beaudent Dental Care",
  publisher: "Beaudent Dental Care",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://beaudent.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Beaudent Dental Care | Expert Endodontist & Laser Dentistry",
    description: "Dr. Ankita Nagrani - 8-10 Years Experience. Expert Dental Care in Baner, Pune.",
    url: 'https://beaudent.in/',
    siteName: "Beaudent Dental Care",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Beaudent Dental Care",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Beaudent Dental Care",
    description: "Expert Endodontist & Laser Dentistry in Pune",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#5d2350" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
