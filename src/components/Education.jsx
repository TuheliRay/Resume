import { useEffect } from "react";
import Lottie from "lottie-react";
import education from "../assets/lottie/education.json";
import {JIS} from "../constants/Constant.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Education() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="education" data-aos="fade-right" className=" py-24 px-4 sm:px-6 lg:px-8">
      <div  className="max-w-7xl mx-auto">
        <h1 className="text-7xl sm:text-6xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-slate-100 text-center mb-16">
           Education
        </h1>

        <div data-aos="fade-right" className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <div className="flex justify-center">
            <Lottie
            animationData={education}
            loop={true}
            className="max-w-[500px] shadow-xl rounded-xl border border-[#00040f]"
          />
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <img 
                src="https://placehold.co/64x64/10b981/ffffff?text=JIS"
                alt="JIS Logo"
                className="w-16 h-16 rounded-full shadow-md hover:shadow-emerald-500/30 transition-shadow duration-300"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/64x64/10b981/ffffff?text=Logo';
                }}
              />
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-emerald-400">
                  JIS College of Engineering, <br/> Kalyani
                </h3>
              </div>
            </div>

            <h4 className="text-xl lg:text-2xl font-semibold text-slate-200 pl-20">
              Bachelor of Technology
            </h4>
            <p className="text-lg text-slate-400 pl-20">
              September 2024 – July 2028
            </p>
            <p className="text-lg text-slate-400 pl-20">
              Computer Science And Engineering
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

