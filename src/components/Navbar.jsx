export default function Navbar() {
  return (
    // Add z-50 to ensure the navbar is on top of other content
    <nav className="fixed top-0 left-0 w-full bg-[#020617] px-12 py-5 shadow-md font-sans z-50">
      <div className="flex justify-between items-center">
        <div className="text-white text-3xl font-bold font-mono">
          <span className="text-teal-400">&lt;</span>
          TuheliRay
          <span className="text-teal-400">/&gt;</span>
        </div>
        <div className="space-x-10 text-gray-200 text-lg font-medium">
          <a href="#home" className="hover:text-green-400 transition-colors duration-300">Home</a>
          <a href="#education" className="hover:text-green-400 transition-colors duration-300">Education</a>
          <a href="#projects" className="hover:text-green-400 transition-colors duration-300">Projects</a>
          <a href="#connect" className="hover:text-green-400 transition-colors duration-300">Connect</a>
        </div>
      </div>
    </nav>
  );
}