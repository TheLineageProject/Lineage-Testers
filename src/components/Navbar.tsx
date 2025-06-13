import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "HOME", href: "#hero" },
  { label: "ABOUT", href: "#about" },
  { label: "FEATURES", href: "#features" },
  { label: "CONTACT", href: "#waitlist" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full bg-white flex items-center justify-between py-4 px-6 border-b border-gray-200 sticky top-0 z-50">
      {/* Logo */}
      <a href="#home" className="flex items-center z-50">
        <Image src="/footer-logo.png" alt="My Lineage Logo" width={176} height={64} priority className="h-12 w-auto sm:h-16 sm:w-44" />
      </a>
      {/* Nav Links (desktop) */}
      <div className="flex-1 flex justify-center">
        <ul className="hidden md:flex space-x-8 text-base font-semibold">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="hover:text-pink-500 transition-colors duration-200"
                style={{ letterSpacing: '0.03em' }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Join Waitlist Button (desktop) */}
      <a
        href="#waitlist"
        className="hidden md:inline-block ml-4 px-8 py-3 text-white font-bold text-base"
        style={{
          background: 'linear-gradient(90deg, #ff9966 0%, #a259ff 100%)',
          boxShadow: '0 2px 8px rgba(162,89,255,0.15)'
        }}
      >
        JOIN WAITLIST
      </a>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden flex items-center justify-center ml-auto"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-purple-600">
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
          )}
        </svg>
      </button>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-transparent bg-opacity-20 backdrop-blur-sm z-40 md:hidden" onClick={() => setMenuOpen(false)}></div>
      )}
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-8">
            <Image src="/footer-logo.png" alt="My Lineage Logo" width={120} height={44} className="h-10 w-auto" />
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="p-2">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-purple-600">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col space-y-6 text-lg font-semibold">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block py-2 px-2 rounded hover:bg-purple-50 hover:text-pink-500 transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#waitlist"
            className="mt-auto mb-8 px-8 py-3 text-white font-bold text-base rounded shadow text-center"
            style={{
              background: 'linear-gradient(90deg, #ff9966 0%, #a259ff 100%)',
              boxShadow: '0 2px 8px rgba(162,89,255,0.15)'
            }}
            onClick={() => setMenuOpen(false)}
          >
            JOIN WAITLIST
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 