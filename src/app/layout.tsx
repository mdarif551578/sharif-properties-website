'use client';

import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Sharif Properties - Luxury Real Estate in Dhaka</title>
        <meta name="description" content="Sharif Properties offers a premier selection of luxury apartments, commercial spaces, and houses in Dhaka's most desirable neighborhoods, including Gulshan, Banani, and Bashundhara." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="keywords" content="real estate Dhaka, luxury apartments Dhaka, property in Gulshan, property in Banani, commercial space Dhaka, Sharif Properties" />
        <meta property="og:title" content="Sharif Properties - Luxury Real Estate in Dhaka" />
        <meta property="og:description" content="Discover premium properties for sale in Dhaka with Sharif Properties. Your trusted partner for luxury real estate." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sharifproperties.com" />
        <meta property="og:image" content="https://www.sharifproperties.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sharif Properties - Luxury Real Estate in Dhaka" />
        <meta name="twitter:description" content="Your expert guide to buying and selling exclusive properties in Dhaka, Bangladesh." />
        <meta name="twitter:image" content="https://www.sharifproperties.com/twitter-image.jpg" />
      </head>
      <body className="font-body antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
