import { useState } from "react";
import logo from "../assets/assets/logo-text.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-4 py-3">

        {/* Main Navbar */}
        <div className="flex items-center justify-between">

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>

          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Dev Stack Logo"
              className="w-24 h-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">

            {/* Active Home */}
            <a
              href="#"
              className="text-brand-gradient font-medium"
            >
              Home
            </a>

            <a href="#">
              Technologies
            </a>

            <a href="#">
              Projects
            </a>

            <a href="#">
              About
            </a>

            <a href="#">
              Contact
            </a>

          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">

            <button className="px-4 py-2">
              Sign In
            </button>

            <button className="brand-gradient text-white px-5 py-2 rounded-full">
              Sign Up
            </button>

          </div>

          {/* Mobile Sign In */}
          <button className="md:hidden px-2 py-2">
            Sign In
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 border-t border-gray-200 pt-4 flex flex-col gap-4">

            {/* Active Home */}
            <a
              href="#"
              className="text-brand-gradient font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>

            <a
              href="#"
              onClick={() => setMenuOpen(false)}
            >
              Technologies
            </a>

            <a
              href="#"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>

            <a
              href="#"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>

            <a
              href="#"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>

            <button className="brand-gradient text-white px-5 py-2 rounded-full">
              Sign Up
            </button>

          </div>
        )}

      </div>

    </nav>
  );
}

export default Navbar;
