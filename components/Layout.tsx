// components/Layout.tsx
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="bg-white text-black px-6 py-4 shadow flex justify-between items-center">
        <h1 className="text-xl font-bold">Eco Rising Solutions</h1>
        <nav className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="bg-gray-100 text-center py-6 mt-16 text-sm">
        <p className="mb-2 font-semibold">Stay Informed</p>
        <p className="mb-2">Join our mailing list for updates on projects, tools, and insights.</p>
        <p>Contact us at <a href="mailto:info@ecospatialtech.com" className="text-blue-600">info@ecospatialtech.com</a></p>
        <p className="mt-4 text-gray-500">© 2025 Eco Rising Solutions. All rights reserved.</p>
      </footer>
    </>
  );
}
