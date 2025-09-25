export default function Image({ img, name }) {
  return (
    <div className="group flex flex-row items-center gap-3 rounded-lg bg-slate-700/50 px-4 py-2 transition-all duration-300 hover:bg-slate-700 hover:shadow-lg">
      <img
        src={img}
        alt={`${name} logo`}
        className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110"
      />
      <h5 className="text-slate-200 text-base font-medium transition-colors duration-300 group-hover:text-cyan-300">
        {name}
      </h5>
    </div>
  );
}