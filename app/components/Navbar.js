import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-blue-700 p-4 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide text-white drop-shadow-sm">
          Bank Finder
        </h1>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/"
              className="text-white font-semibold hover:underline hover:text-blue-300 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-white font-semibold hover:underline hover:text-blue-300 transition duration-300"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
