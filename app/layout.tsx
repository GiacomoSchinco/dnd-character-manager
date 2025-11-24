import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/ui/Topbar";
import { appMetadata } from "@/lib/metadata";
import Wrapper from "@/components/layout/Wrapper";
import App from "next/app";
import { AppProviders } from "@/components/layout/query-provider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = appMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake_fantasy">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-base-300`}
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
