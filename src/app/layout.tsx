import type { Metadata } from "next";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Psi do Futuro",
  description: "Agende a sua sessão",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-custom-pink">
          {children}
      </body>
    </html>
  );
}
