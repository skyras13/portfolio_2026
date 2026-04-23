import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Nav } from "@/components/Nav";
import "./globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Skyler Rasmussen — Software Developer",
  description:
    "Software developer across hospitality tech, ed-tech, ag-tech, and networking + AI infrastructure. Lead dev at Dorado Software. Co-founder of skdaddle.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${grotesk.variable} ${inter.variable} ${mono.variable}`}>
      <body>
        <div className="page">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
