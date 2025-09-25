
export default function ProjectCard({ title, description, tags, codeLink, liveLink }) {
  return (
    // Card container with background, padding, rounded corners, and a border
    <div className="bg-[#1e293b] p-6 rounded-lg border border-slate-700 flex flex-col gap-4 hover:border-teal-500 transition-colors">
      
      {/* Project Title */}
      <h3 className="text-xl font-bold text-white">{title}</h3>

      {/* Project Description */}
      <p className="text-slate-400 text-base">{description}</p>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-slate-700 text-slate-300 text-sm font-medium px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 mt-auto pt-4">
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 py-2 px-4 rounded-md text-white bg-slate-700 hover:bg-slate-600 transition-colors"
        >
          <span>Code</span>
        </a>
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 py-2 px-4 rounded-md text-white bg-teal-600 hover:bg-teal-500 transition-colors"
        >
          <span>Live Preview</span>
        </a>
      </div>
    </div>
  );
}