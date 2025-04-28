import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import { LanguageProvider } from "@/hooks/use-language"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gianluca Di Paola - Ingegnere Informatico | Politecnico di Milano",
  description: "Portfolio professionale: progetti, competenze ed esperienze nel campo dell'ingegneria e dell'informatica.",
  keywords: ["portfolio", "software engineering", "politecnico milano", "studente", "sviluppatore", "ingegnere", "ingegnere informatico", "milano", "palermo", "gianluca di paola", "gianluca", "paola"],
  authors: [{ name: "Gianluca Di Paola", url: "https://gianlucadipaola.com" }],

  openGraph: {
    title: "Gianluca Di Paola - Ingegnere Informatico | Politecnico di Milano",
    description: "Portfolio professionale: progetti, competenze ed esperienze nel campo dell'ingegneria informatica.",
    url: "https://gianlucadipaola.com",
    siteName: "gianlucadipaola.com",
    images: [
      {
        url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width: 1200,
        height: 630,
        alt: "Preview Image",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   site: "@mio_handle",
  //   creator: "@mio_handle",
  //   title: "Il mio portfolio",
  //   description: "La descrizione Twitter del sito.",
  //   images: ["https://www.example.com/twitter.png"], 
  // },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": "standard",
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1.0,
    maximumScale: 1.0,
  },
  // verification: {
  //   google: "google_verification_token",
  //   yandex: "yandex_verification_token",
  //   yahoo: "yahoo_verification_token",
  //   other: {
  //     me: ["mail@example.com", "123456789"],
  //   },
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body className={inter.className}>
          <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
