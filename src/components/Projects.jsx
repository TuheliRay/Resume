import ProjectCard from "./ProjectCard"
import AOS from "aos";
import "aos/dist/aos.css";
const ProjectData=[
    {
    title:'Whack-A-Mole Game',
    description:"A fun and interactive Whack-A-Mole game built with React and Tailwind CSS, featuring responsive design and smooth animations.",
    tags:["React" , "Tailwind CSS"],
    codeLink:"https://github.com/TuheliRay/Whack-A-Mole",
    liveLink:"https://whack-a-mole-nine-ruby.vercel.app/"
},
 {
    title:'HN Job Board',
    description:"Real-time developer job board powered by Hacker News API with efficient pagination and smooth browsing.",
    tags:["React" , "Tailwind CSS"],
    codeLink:"https://github.com/TuheliRay/Job-Board",
    liveLink:"https://job-board-six-beta.vercel.app/"
},
    {
    title:'Portfolio Website',
    description:"A personal portfolio to showcase my skills and projects, built with a modern tech stack and a focus on design and user experience.",
    tags:['React' , 'Tailwind CSS' , 'Framer Motion'],
    codeLink:"",
    liveLink:""
},
{
    title:'Notes App',
    description:"A full-stack Notes App with user authentication, allowing users to create, edit, and manage their personal notes.",
    tags:["React" , "Node.js" , "Express", "MongoDB" ],
    codeLink:"https://github.com/TuheliRay/Notes-App",
    liveLink:"https://notes-app-sand-gamma.vercel.app/"
},
{
    title:'User Authentication System',
    description:"A full-stack user authentication system with secure signup, login, and protected routes using JWT.",
    tags:["React" , "Node.js" , "Express", "MySQL"],
    codeLink:"https://github.com/TuheliRay/Auth-System",
    liveLink:""
},
{
    title:'Anime Watchlist',
    description:"Anime Watchlist lets users select anime and organize them into categories like ‘Watching’, ‘Plan to Watch’, or ‘Completed’ for easy tracking and management.",
    tags:["React" , "Tailwind CSS"],
    codeLink:"https://github.com/TuheliRay/Anime-Watchlist",
    liveLink:"https://anime-watchlist-black.vercel.app/"
},
{
    title:'Team Formation Tool',
    description:"Team Formation Tool helps users create and manage teams by assigning members based on roles, skills, or preferences, making collaboration efficient and organized.",
    tags:["React" , "Tailwind CSS"],
    codeLink:"https://github.com/TuheliRay/Team-formation-tool",
    liveLink:"https://team-formation-tool-red.vercel.app/"
},
]
export default function Projects(){
    return(
        <>
        <div   id="projects" className="bg-[#0f172a] min-h-screen w-full p-8 sm:p-12">
            <div className="WRAPPER mt-10" data-aos="fade-down">
                <h1 className="text-7xl sm:text-6xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-slate-100 text-center mb-20 pb-4 pt-0">
           Projects
        </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {ProjectData.map((project , index)=>(
                    <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    codeLink={project.codeLink}
                    liveLink={project.liveLink}
                 />
                ))}
            </div>
        </div>
        </>
    )
}