import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Toobit - Register & Trade Crypto with 5% Referral Bonus",
  description: "Join Toobit crypto exchange and get exclusive newbie rewards plus up to 5% referral commission. Trade crypto with low fees, fast execution, and multi-language support. Register now!",
  keywords: "Toobit exchange, crypto trading, referral bonus, cryptocurrency, Bitcoin, Ethereum, trading platform, crypto exchange, blockchain, low fees",
  authors: [{ name: "Toobit" }],
  robots: "index, follow",
  metadataBase: new URL("https://www.toobit.guru"),
  alternates: {
    canonical: "https://www.toobit.guru",
  },
  openGraph: {
    title: "Toobit - Register & Trade Crypto with 5% Referral Bonus",
    description: "Join Toobit crypto exchange and get exclusive newbie rewards plus up to 5% referral commission. Trade crypto with low fees, fast execution, and multi-language support.",
    url: "https://www.toobit.guru/",
    siteName: "Toobit Referral",
    images: [
      {
        url: "https://www.toobit.guru/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Toobit Referral"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Toobit - Register & Trade Crypto with 5% Referral Bonus",
    description: "Join Toobit crypto exchange and get exclusive newbie rewards plus up to 5% referral commission.",
    images: ["https://www.toobit.guru/og-image.jpg"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ background: '#0B0E11' }}>
      <head>
        <link rel="icon" href="https://www.toobit.com/favicon.ico" />
        <link rel="apple-touch-icon" href="https://www.toobit.com/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KWQSLXFP83"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KWQSLXFP83');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
