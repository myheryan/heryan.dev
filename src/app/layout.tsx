// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Gunakan font bawaan Next.js yang modern
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Heryan | Web Developer",
  description: "Portofolio modern dari Heryan, seorang Web Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark"> {/* Pastikan class dark aktif jika Anda ingin mode gelap */}
      <body className={`${inter.className} bg-background text-foreground min-h-screen flex flex-col`}>
        
        {/* Navigasi Minimalis */}
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto flex h-16 items-center justify-between px-6 max-w-4xl">
            <Link href="/" className="font-bold text-xl tracking-tight">
              Heryan<span className="text-primary">.</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/" className="transition-colors hover:text-primary text-muted-foreground">
                Profile
              </Link>
              <Link href="/projects" className="transition-colors hover:text-primary text-muted-foreground">
                Projects
              </Link>
            </nav>
          </div>
        </header>

        {/* Konten Utama */}
        <main className="flex-1 container mx-auto px-6 py-12 max-w-4xl">
          {children}
        </main>
        
        {/* Footer Sederhana */}
        <footer className="border-t border-border/40 py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Heryan. All rights reserved.
        </footer>
      </body>
    </html>
  );
}