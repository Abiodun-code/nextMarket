import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toast";
import ReactQueryProviders from "./providers";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "NextMarket - Best Selling Platform",
  description: "Best selling place for all product",
  icons: {
    // icon: [
    //   { url: "/favicon.svg", type: "image/svg+xml" },
    //   { url: "./public/globe.svg", type: "image/png", sizes: "96x96" },
    // ],
    shortcut: "/globe.svg",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} scroll-container antialiased`}
        // add ${generalSans.variable} here once you wire up the local font above
      >
        <ReactQueryProviders>
          {children}
          <Toaster />
        </ReactQueryProviders>
      </body>
    </html>
  );
}