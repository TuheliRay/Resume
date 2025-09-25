export default function About() {
  return (
    <main id="home" className="pt-30 min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center  px-4">
      <div className="text-center space-y-6 max-w-3xl">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-100 leading-tight">
          Hi, I'm <br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">Tuheli Ray</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto">
          Crafting ideas into code with a focus on simplicity, learning, and growth.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4 pt-4">

        <a href="#connect" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-300">
          Get In Touch
        </a>

        <a href="#projects" className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-slate-500">
          View My Work
        </a>
        </div>
       </div>
    </main>
  );
}
