import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Portofolio Saya",
  icons: {
    icon: "/favicon.ico",
  },
  description: "Website portofolio pribadi dengan Next.js + Tailwind",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-black text-white font-sans antialiased">
        <Navbar></Navbar>
        {/* Background Decoration (optional, soft gray blur) */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-white/5 rounded-full blur-2xl sm:blur-3xl" />
          <div className="absolute bottom-0 right-0 w-56 h-56 sm:w-72 sm:h-72 bg-white/10 rounded-full blur-xl sm:blur-2xl" />
        </div>

        {/* Konten */}
        <main className="relative z-10 pt-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto">{children}</div>
        </main>

        <Footer></Footer>
      </body>
    </html>
  );
}
