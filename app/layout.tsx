import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from 'next/script'
import { cn } from "@/lib/utils"
import { enableSmoothScrolling } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI Marketplace",
  description: "Hire AI Developer For Your Business",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="spline-preload"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                const preloadSpline = new Image();
                preloadSpline.src = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";
              });
            `,
          }}
        />
        <Script
          id="smooth-scroll"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (${enableSmoothScrolling.toString()})();
            `,
          }}
        />
      </head>
      <body className={cn(inter.className, "overflow-x-hidden")}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

import './globals.css'
