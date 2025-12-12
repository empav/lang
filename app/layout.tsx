import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const font = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lang",
  description: "Learn languages with Lang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
