import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Psi do Futuro",
  description: "Agende a sua sessão",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-primary-900">
        {children}
      </body>
      <footer className="bg-primary-900 text-neutral-500 py-4 text-center text-base">
        <div className="container mx-auto">
          <div className="flex justify-center items-center space-x-4">
            <a href="https://github.com/paulpessoa/api-psicologos" target="_blank" rel="noopener noreferrer" className="flex items-center">
              Repositório API
            </a>
            <a href="https://github.com/paulpessoa/lista-psicologos" target="_blank" rel="noopener noreferrer" className="flex items-center">
              Repositório Frontend
            </a>
          </div>
        </div>
      </footer>
    </html>
  );
}
