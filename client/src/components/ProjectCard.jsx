export default function ProjectCard({ project }) {
    const techTags = project.tech.split(',').map((tag) => tag.trim());

    return (
        <div className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:border-green-500">
            <div className="w-full h-40 md:h-[220px] bg-gray-100 overflow-hidden flex items-center justify-center border-b border-slate-200 dark:border-slate-700">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="p-4 md:p-6 flex flex-col gap-2.5 md:gap-3 flex-1">
                <h3 className="m-0 text-lg md:text-[1.4rem] font-bold">{project.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-[0.85rem] md:text-[0.95rem] leading-normal m-0">
                    {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-1">
                    {techTags.map((tag) => (
                        <span
                            key={tag}
                            className="bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full text-[0.7rem] font-semibold border border-slate-200 dark:border-slate-700"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="mt-auto pt-2.5 flex flex-col md:flex-row gap-2.5 md:gap-5">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 dark:text-slate-400 no-underline font-medium text-[0.85rem] flex items-center gap-1.5 transition-colors duration-300 hover:text-green-500"
                    >
                        <i className="fab fa-github text-base"></i> Repository
                    </a>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 dark:text-slate-400 no-underline font-medium text-[0.85rem] flex items-center gap-1.5 transition-colors duration-300 hover:text-green-500"
                    >
                        <i className="fas fa-external-link-alt text-base"></i> Live Demo
                    </a>
                </div>
            </div>
        </div>
    );
}
