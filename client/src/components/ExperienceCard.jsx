export default function ExperienceCard({ exp }) {
    return (
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-8 mb-6 shadow-sm transition-all duration-300 hover:border-green-500 hover:-translate-y-0.5">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-[15px] mb-5">
                <div className="flex gap-5 items-center">
                    <div className="w-16 h-16 flex items-center justify-center shrink-0">
                        <img src={exp.logo} alt={exp.company} className="max-w-full max-h-full object-contain" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                        <p className="text-green-500 font-medium m-0">{exp.company}</p>
                    </div>
                </div>
                <span className="text-[0.8rem] md:text-[0.9rem] text-slate-500 dark:text-slate-400 whitespace-nowrap">
                    {exp.date}
                </span>
            </div>

            <ul className="list-disc ml-6 mb-6 space-y-2 text-slate-500 dark:text-slate-400 text-base">
                {exp.points.map((point, index) => (
                    <li key={index} className="pl-2">
                        {point}
                    </li>
                ))}
            </ul>

            <div className="flex flex-wrap gap-2">
                {exp.tech.map((item) => (
                    <span
                        key={item}
                        className="bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 px-4 py-1.5 rounded-full text-[0.85rem] font-medium border border-slate-200 dark:border-slate-700"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}
