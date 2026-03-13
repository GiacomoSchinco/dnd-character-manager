import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/ui/Topbar";
import { appMetadata } from "@/lib/metadata";
import Wrapper from "@/components/layout/Wrapper";
import App from "next/app";
import { AppProviders } from "@/components/layout/query-provider";
// Disable automatic preload so the dev-server preload warning is quieter
// and to avoid preloading fonts that aren't used immediately.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  preload: false,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: false,
});


export const metadata: Metadata = appMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="ancient">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-amber-100/50 to-amber-300/30`}
      >
        <AppProviders>
          <Topbar />
          <Wrapper>
            <div>{children}</div>
          </Wrapper>
        </AppProviders>
      </body>
    </html>
  );
}
