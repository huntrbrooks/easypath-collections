import type React from "react"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Inter } from "next/font/google"
import { NavigationProvider } from "@/components/navigation-context"
import { Suspense } from "react"
import { StructuredData } from "./structured-data"
import { GoogleAnalytics } from "@/components/analytics"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${inter.className}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <NavigationProvider>{children}</NavigationProvider>
        </Suspense>
        <GoogleAnalytics />
        <Analytics />
      </body>
    </html>
  )
}

export const metadata = {
  title: {
    default: 'EasyPath Collections - Professional Debt Recovery Services',
    template: '%s | EasyPath Collections'
  },
  description: 'Australia\'s most trusted debt recovery specialists with over 15 years of proven success. Professional B2B debt collection with industry-leading success rates.',
  keywords: ['debt recovery', 'debt collection', 'commercial debt', 'B2B collection', 'Australia', 'Melbourne'],
  authors: [{ name: 'EasyPath Collections' }],
  creator: 'EasyPath Collections',
  publisher: 'EasyPath Collections',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://easypathcollections.com.au'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'EasyPath Collections - Professional Debt Recovery Services',
    description: 'Australia\'s most trusted debt recovery specialists with over 15 years of proven success.',
    url: 'https://easypathcollections.com.au',
    siteName: 'EasyPath Collections',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EasyPath Collections - Professional Debt Recovery Services',
    description: 'Australia\'s most trusted debt recovery specialists with over 15 years of proven success.',
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
  verification: {
    google: 'your-google-verification-code',
  },
};
