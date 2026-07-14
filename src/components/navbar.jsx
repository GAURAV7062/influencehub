import logo from "../assets/logo.png";

export default function Navbar() {
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

        {/* Navigation */}
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
              <a href="#feedback" className="hover:text-blue-500">
                 Feedback
              </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-500 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Button */}
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}