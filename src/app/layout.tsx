import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "走进Dapp的世界",
  description: "我们的世界很精彩",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
