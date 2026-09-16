import { useEffect, useRef, useState } from 'react';
import { skills, aiTools } from '../../../data/portfolio.js';

const CATEGORIES = ['Languages', 'Frontend', 'Backend', 'Data', 'Workflow & Ops'];

function SkillChip({ skill, index }) {
    return (
        <div
            className="group flex items-center gap-2.5 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 shadow-[0_1px_2px_rgba(15,23,42,0.05)] cursor-default transition-all duration-300 hover:-translate-y-1 hover:border-(--brand) hover:ring-2 hover:ring-(--brand)/20 hover:shadow-[0_10px_20px_-10px_rgba(15,23,42,0.35)]"
            style={{ '--brand': skill.color }}
        >
            <img
                src={skill.logo}
                alt={skill.name}
                loading="lazy"
                className="w-[22px] h-[22px] object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_6px_var(--brand)]"
            />
            <span className="text-[0.85rem] font-medium text-slate-700 dark:text-slate-100 whitespace-nowrap">
                {skill.name}
            </span>
        </div>
    );
}

function AiChip({ tool }) {
    return (
        <div
            className="group flex items-center gap-2.5 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 shadow-[0_1px_2px_rgba(15,23,42,0.05)] cursor-default transition-all duration-300 hover:-translate-y-1 hover:border-(--brand) hover:ring-2 hover:ring-(--brand)/20 hover:shadow-[0_10px_20px_-10px_rgba(15,23,42,0.35)]"
            style={{ '--brand': tool.color }}
        >
            <span
                className="w-[22px] h-[22px] rounded-[7px] flex items-center justify-center text-white text-[0.55rem] font-bold tracking-tight select-none transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: tool.color }}
                aria-hidden="true"
            >
                {tool.mark}
            </span>
            <span className="text-[0.85rem] font-medium text-slate-700 dark:text-slate-100 whitespace-nowrap">
                {tool.name}
            </span>
        </div>
    );
}

export default function TechStack() {
    const [visible, setVisible] = useState(false);
    const gridRef = useRef(null);

    useEffect(() => {
        const el = gridRef.current;
        if (!el) return;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setVisible(true);
            return;
        }

        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    io.disconnect();
                }
            },
            { threshold: 0.12 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    const groups = CATEGORIES.map((category) => ({
        category,
        items: skills.filter((skill) => skill.category === category),
    }));

    const totalTools = skills.length + aiTools.length;

    return (
        <div>
            <div className="mb-8 flex items-center justify-between font-mono text-[0.8rem] md:text-[0.85rem]">
                <p className="m-0 text-slate-500 dark:text-slate-400">
                    <span className="text-green-500 font-semibold">$</span> stack
                    <span className="text-slate-400 dark:text-slate-600"> --list --layers</span>
                </p>
                <p className="m-0 text-slate-400 dark:text-slate-600">
                    {totalTools} tools · {groups.length}+1 layers
                </p>
            </div>

            <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {groups.map((group, groupIndex) => (
                    <article
                        key={group.category}
                        style={{ transitionDelay: `${groupIndex * 90}ms` }}
                        className={`rounded-2xl border border-slate-200 dark:border-slate-700/70 bg-white/60 dark:bg-slate-900/40 p-5 md:p-6 transition-all duration-500 ${
                            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                    >
                        <header className="mb-4 flex items-baseline justify-between font-mono text-[0.75rem] uppercase tracking-[0.18em]">
                            <span className="text-slate-500 dark:text-slate-400">
                                <span className="text-green-500">//</span> {group.category}
                            </span>
                            <span className="text-slate-400 dark:text-slate-600">{group.items.length}</span>
                        </header>

                        <div className="flex flex-wrap gap-2.5">
                            {group.items.map((skill, i) => (
                                <SkillChip key={skill.name} skill={skill} index={i} />
                            ))}
                        </div>
                    </article>
                ))}

                <article
                    style={{ transitionDelay: `${groups.length * 90}ms` }}
                    className={`rounded-2xl border border-slate-200 dark:border-slate-700/70 bg-white/60 dark:bg-slate-900/40 p-5 md:p-6 transition-all duration-500 ${
                        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                >
                    <header className="mb-4 flex items-baseline justify-between font-mono text-[0.75rem] uppercase tracking-[0.18em]">
                        <span className="text-slate-500 dark:text-slate-400">
                            <span className="text-green-500">//</span> AI Workflow
                        </span>
                        <span className="text-slate-400 dark:text-slate-600">{aiTools.length}</span>
                    </header>

                    <div className="flex flex-wrap gap-2.5">
                        {aiTools.map((tool) => (
                            <AiChip key={tool.name} tool={tool} />
                        ))}
                    </div>
                </article>
            </div>
        </div>
    );
}