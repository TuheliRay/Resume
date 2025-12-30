import {
  C,
  CPP,
  HTML,
  CSS,
  Github,
  Git,
  Vite,
  TailwindCSS,
  react,
  Javascript,
  MySQL,
  MongoDB,
  Java,
  node,
  H2,
  postman
} from "../constants/Constant.jsx";
import Image from "./Image.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Skills() {
    useEffect(() => {
    AOS.init();
  }, []);
  return (
     <div className="bg-[#0f172a] min-h-screen w-full p-8 sm:p-12">
    <section id="skills" data-aos="fade-right" className="w-full  py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-7xl sm:text-6xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-slate-100 text-center mb-20">
          Skills
        </h2>
        <div data-aos="zoom-out-up" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Frontend Card */}
          <div className="flex flex-col bg-slate-800 p-8 rounded-lg border border-slate-700 transition-all duration-300 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-[0_0_15px_0] hover:shadow-cyan-400/30">
            <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 mb-8 text-center">
             Frontend
             </h3>

            <div className="flex flex-row flex-wrap justify-center gap-4">
              <Image img={HTML} name="HTML" />
              <Image img={CSS} name="CSS" />
              <Image img={Javascript} name="JavaScript" />
              <Image img={react} name="React" />
              <Image img={TailwindCSS} name="Tailwind CSS" />
              <Image img={Vite} name="Vite" />
            </div>
          </div>

          {/* Programming Languages Card */}
          <div className="flex flex-col bg-slate-800 p-8 rounded-lg border border-slate-700 transition-all duration-300 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-[0_0_15px_0] hover:shadow-cyan-400/30">
            <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 mb-8 text-center">
              Programming Languages
            </h3>
            <div className="flex flex-row flex-wrap justify-center gap-4">
              <Image img={Java} name="Java" />
              <Image img={C} name="C" />
              <Image img={CPP} name="C++" />
            </div>
          </div>

          {/* Databases Card */}
          <div className="flex flex-col bg-slate-800 p-8 rounded-lg border border-slate-700 transition-all duration-300 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-[0_0_15px_0] hover:shadow-cyan-400/30">
            <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 mb-8 text-center">
              Backend and Databases 
            </h3>
            <div className="flex flex-row flex-wrap justify-center gap-4">
              <Image img={node} name="Node.js" />
              <Image img={MySQL} name="MySQL" />
              <Image img={MongoDB} name="MongoDB" />
              <Image img={H2} name="H2 Database" />
            </div>
          </div>

          {/* Tools Card */}
          <div className="flex flex-col bg-slate-800 p-8 rounded-lg border border-slate-700 transition-all duration-300 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-[0_0_15px_0] hover:shadow-cyan-400/30">
            <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 mb-8 text-center">
              Tools
            </h3>
            <div className="flex flex-row flex-wrap justify-center gap-4">
              <Image img={Git} name="Git" />
              <Image img={Github} name="GitHub" />
              <Image img={postman} name="Postman" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}