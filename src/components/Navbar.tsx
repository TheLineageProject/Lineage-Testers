import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full bg-white flex justify-center items-center py-4 shadow-sm">
      <Image src="/footer-logo.png" alt="My Lineage Logo" width={176} height={64} priority className="h-12 w-auto sm:h-16 sm:w-44" />
    </nav>
  );
};

export default Navbar; 