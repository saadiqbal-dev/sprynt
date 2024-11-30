import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    default: "Sprynt",
    template: "%s | Sprynt",
  },
  metadataBase: new URL("https://sprynt.vercel.app"),
  description:
    "Sprynt is a location-based platform designed to connect you with freelancers and skilled professionals in your area, instantly.",
  keywords: ["sprynt", "freelancer", "talent", "location-based", "platform"],
  creator: "Sprynt",
  authors: [
    {
      name: "Sprynt",
      url: "https://sprynt.vercel.app",
    },
  ],
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          inter.className
        )}
      >
        <div className="relative flex min-h-screen flex-col bg-background">
          <div className="border-border/40">
            <div className="mx-auto w-full border-border/40 min-[1800px]:max-w-[1536px] min-[1800px]:border-x">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
