import { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0B1120]/90 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="InfluenceHub"
            className="w-12 h-12 rounded-full"
          />

          <h1 className="text-2xl font-bold">
            <span className="text-white">Influence</span>
            <span className="text-blue-500">Hub</span>
          </h1>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white font-medium">

          <li>
            <a href="#home" className="hover:text-blue-500 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#services" className="hover:text-blue-500 transition">
              Services
            </a>
          </li>

          <li>
            <a href="#why" className="hover:text-blue-500 transition">
              Why Us
            </a>
          </li>

          <li>
            <a href="#how" className="hover:text-blue-500 transition">
              How It Works
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-blue-500 transition">
              About
            </a>
          </li>

          <li>
            <a href="#feedback" className="hover:text-blue-500 transition">
              Feedback
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-500 transition">
              Contact
            </a>
          </li>

        </ul>

        {/* Desktop Button */}
        <a
          href="#contact"
          className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          Get Started
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111827] border-t border-white/10">

          <ul className="flex flex-col text-center py-6 gap-6 text-white text-lg">

            <li>
              <a href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </a>
            </li>

            <li>
              <a href="#services" onClick={() => setMenuOpen(false)}>
                Services
              </a>
            </li>

            <li>
              <a href="#why" onClick={() => setMenuOpen(false)}>
                Why Us
              </a>
            </li>

            <li>
              <a href="#how" onClick={() => setMenuOpen(false)}>
                How It Works
              </a>
            </li>

            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>

            <li>
              <a href="#feedback" onClick={() => setMenuOpen(false)}>
                Feedback
              </a>
            </li>

            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="inline-block bg-blue-600 px-6 py-3 rounded-xl font-semibold"
              >
                Get Started
              </a>
            </li>

          </ul>

        </div>
      )}

    </nav>
  );
}