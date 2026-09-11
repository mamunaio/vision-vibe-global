import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Vision Vibe Global | Physical Commodities & International Merchant Trading House",
    template: "%s | Vision Vibe Global",
  },
  description:
    "Vision Vibe Global is a premier international physical commodities trading house and merchant distribution conglomerate specializing in energy products, industrial metals, agri-bulk, chemicals, and maritime logistics.",
  keywords: [
    "commodity trading house",
    "physical commodities",
    "merchant trading",
    "trade finance",
    "letters of credit",
    "maritime logistics",
    "bulk vessel chartering",
    "import export trading",
  ],
  authors: [{ name: "Vision Vibe Global" }],
  creator: "Vision Vibe Global",
  metadataBase: new URL("https://visionvibeglobal.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://visionvibeglobal.com",
    siteName: "Vision Vibe Global",
    title: "Vision Vibe Global | Physical Commodities & Merchant Trading House",
    description:
      "Connecting global supply and demand with physical commodity trading, maritime logistics, and structured trade finance.",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${manrope.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-navy-900 text-ink-primary antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
