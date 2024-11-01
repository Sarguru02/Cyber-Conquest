import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SocketProvider } from "@/contexts/socketContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cyber Conquest - TALOS",
  description:
    "A custom Monopoly created by Sargurunathan and Naveen Kumar for a National Technical Symposium TALOS of Chennai Institute of Technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <SocketProvider>{children}</SocketProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
