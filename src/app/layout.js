import { Manrope, Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";
import { LanguageProvider } from "@/context/LanguageContext";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-arabic",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://oceanseven.sa"),
  title: "Ocean Seven Seafood Trading Company | Jeddah, Saudi Arabia",
  description:
    "Ocean Seven Seafood Trading Company connects quality seafood with customers through reliable sourcing, professional trading, and dependable supply solutions from Jeddah, Saudi Arabia.",
  keywords: [
    "Ocean Seven",
    "Ocean Seven Seafood Trading Company",
    "seafood trading Jeddah",
    "seafood supplier Saudi Arabia",
    "quality seafood trading",
    "fresh seafood Jeddah",
    "frozen seafood trading",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Ocean Seven Seafood Trading Company | Quality Seafood Trading",
    description:
      "Your trusted connection to quality seafood trading and supply solutions from Jeddah, Saudi Arabia.",
    siteName: "Ocean Seven Seafood Trading Company",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} ${ibmPlexArabic.variable}`}>
      <body className="font-sans bg-pearl text-charcoal min-h-screen flex flex-col antialiased selection:bg-ocean selection:text-white">
        <LanguageProvider>
          <ScrollRevealProvider>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </ScrollRevealProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
