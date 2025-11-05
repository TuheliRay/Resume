import { useState } from "react";
import { Menu, X } from "lucide-react"; // lucide-react icons (optional, but neat)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#020617] px-6 md:px-12 py-5 shadow-md font-sans z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl md:text-3xl font-bold font-mono">
          <span className="text-teal-400">&lt;</span>
          TuheliRay
          <span className="text-teal-400">/&gt;</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 text-gray-200 text-lg font-medium">
          <a href="#home" className="hover:text-green-400 transition-colors duration-300">Home</a>
          <a href="#education" className="hover:text-green-400 transition-colors duration-300">Education</a>
          <a href="#projects" className="hover:text-green-400 transition-colors duration-300">Projects</a>
          <a href="#connect" className="hover:text-green-400 transition-colors duration-300">Connect</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-200 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 text-gray-200 text-lg font-medium bg-[#020617] border-t border-gray-700 pt-4 pb-6 px-4 rounded-b-2xl shadow-lg">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="hover:text-green-400 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#education"
            onClick={() => setIsOpen(false)}
            className="hover:text-green-400 transition-colors duration-300"
          >
            Education
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="hover:text-green-400 transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#connect"
            onClick={() => setIsOpen(false)}
            className="hover:text-green-400 transition-colors duration-300"
          >
            Connect
          </a>
        </div>
      )}
    </nav>
  );
}
