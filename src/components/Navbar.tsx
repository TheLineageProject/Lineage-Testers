import Image from "next/image";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "FEATURES", href: "#features" },
  { label: "CONTACT", href: "#waitlist" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  return (
    <nav className="w-full bg-white flex items-center justify-between py-4 px-6 border-b border-gray-200 sticky top-0 z-50">
      {/* Logo */}
      <a href="#home" className="flex items-center">
        <Image src="/footer-logo.png" alt="My Lineage Logo" width={176} height={64} priority className="h-12 w-auto sm:h-16 sm:w-44" />
      </a>
      {/* Nav Links */}
      <div className="flex-1 flex justify-center">
        <ul className="flex space-x-8 text-base font-semibold">
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
      {/* Join Waitlist Button */}
      <a
        href="#waitlist"
        className="ml-4 px-8 py-3 text-white font-bold text-base"
        style={{
          background: 'linear-gradient(90deg, #ff9966 0%, #a259ff 100%)',
          boxShadow: '0 2px 8px rgba(162,89,255,0.15)'
        }}
      >
        JOIN WAITLIST
      </a>
    </nav>
  );
};

export default Navbar; 