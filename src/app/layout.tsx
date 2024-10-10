import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import { TaskStoreProvider } from "@/providers/task-store-provider";
import { TeamStoreProvider } from "@/providers/team-store-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Kinetic",
  description: "Kinetic project management tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="The Kinetic Blog"
          href="/blog/feed.xml"
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased no-scrollbar `}
      >
        <TeamStoreProvider>
          <TaskStoreProvider>
            <ThemeProvider attribute="class" defaultTheme="system">
              {children}
              <SpeedInsights />
              <Analytics />
            </ThemeProvider>
          </TaskStoreProvider>
        </TeamStoreProvider>
      </body>
    </html>
  );
}
