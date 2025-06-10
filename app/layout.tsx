// app/layout.tsx
import Link from 'next/link';
import './globals.css'; // if you're using Tailwind or global styles

export const metadata = {
  title: 'Eco Rising Solutions',
  description: 'Geospatial, Environmental, and Climate Intelligence Solutions',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50 text-gray-800">
        <header className="bg-green-100 p-6 shadow-md sticky top-0 z-10">
          <nav className="max-w-6xl mx-auto flex justify-between items-center text-base">
            <h1 className="text-2xl font-bold font-sans">Eco Rising Solutions</h1>
            <div className="space-x-6">
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </nav>
        </header>
        <main className="min-h-screen">{children}</main>
        <footer className="bg-gray-300 text-center text-sm text-gray-800 py-6 mt-10">
          <p>© {new Date().getFullYear()} Eco Rising Solutions. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
