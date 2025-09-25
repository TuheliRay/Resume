import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer id="connect" className="bg-[#0f172a] border-t border-gray-700 py-6 px-8 md:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mr-2">
        {/* Left text */}
        <p className="text-gray-400 text-sm text-center md:text-left">
          Made by{" "}
          <span className="font-semibold text-white">Tuheli Ray</span> 
        </p>

        {/* Right social icons */}
        <div className="flex gap-6 text-xl text-gray-400 ml-5">
          <a href="https://github.com/TuheliRay" className="hover:text-white">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/tuheli-ray-34b168308/" className="hover:text-[#0A66C2]">
            <FaLinkedin />
          </a>
          <a href="https://x.com/Tuheli_Ray" className="hover:text-sky-400">
            <FaTwitter />
          </a>
          <a className="flex items-center gap-2 ">
            <SiGmail />
            <span className="text-base font-mono hidden sm:inline">
              tuheliray@gmail.com
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
