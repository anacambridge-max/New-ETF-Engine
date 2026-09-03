import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "New ETF Engine",
  description: "Adaptive long-term ETF opportunity research dashboard",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
