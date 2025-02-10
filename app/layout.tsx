import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata & {
//   favicon: {
//     url: string;
//     type: string;
//   };
// }
// = {
//   title: "PIPPO - Software Engineering Portfolio",
//   description: "Portfolio of PIPPO, a Polytechnic University of Milan software engineering student.",
//   favicon: {
//     url: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2285%22>🥑</text></svg>",
//     type: "image/svg+xml"
//   }
// }


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}


export const metadata: Metadata & {
    favicon: {
      url: string;
      type: string;
    };
  } = {
  // Index
  title: "Gianluca Di Paola - Ingegnere Informatico | Politecnico di Milano",
  description: "Portfolio professionale di Gianluca Di Paola, studente di Ingegneria Informatica presso il Politecnico di Milano. Progetti, competenze ed esperienze nel campo dell'ingegneria e dell'informatica.",
  keywords: "portfolio, software engineering, politecnico milano, studente, sviluppatore, ingegnere, ingegnere informatico, milano, palermo, gianluca di paola, gianluca, paola",
  favicon: {
    url: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2285%22>🥑</text></svg>",
    type: "image/svg+xml"
  },
  
  // Preview
  openGraph: {
    title: "Portfolio di Gianluca Di Paola - Software Engineering Student",
    description: "Esplora il portfolio tecnico di Gianluca Di Paola, studente al Politecnico di Milano",
    type: "profile",
    url: "https://gianlucadipaola.com", // Sostituisci con il tuo URL
    locale: "it_IT",
    images: "/preview.jpg" 
  },
  
  // Twitter Cards
  // twitter: {
  //   // cardType: "summary_large_image",
  //   site: "@tuoUsername",
  //   creator: "@tuoUsername",
  //   title: "Portfolio di Gianluca Di Paola - Software Engineering Student",
  //   description: "Esplora il portfolio tecnico di Gianluca Di Paola, studente al Politecnico di Milano"
  // },
  
  // Automatic
  robots: {
    index: true,
    follow: true
    // maxSnippet: -1,
    // maxImagePreview: "large",
    // maxVideoPreview: -1
  },
  
  // Meta tag per il viewport mobile-first
  viewport: "width=device-width, initial-scale=1.0"
};
