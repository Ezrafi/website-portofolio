import { useEffect, useRef, useState } from 'react';
import Swiper from 'swiper';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import { skills as skillsData } from '../../../data/portfolio.js';

export default function TechStack() {
    const [skills] = useState(skillsData);
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current || skills.length === 0) return;

        const swiper = new Swiper(containerRef.current, {
            modules: [Autoplay, FreeMode],
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 30,
            speed: 4000,
            grabCursor: true,
            watchSlidesProgress: true,
            updateOnWindowResize: true,
            observer: true,
            observeParents: true,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                waitForTransition: false,
            },
            freeMode: {
                enabled: true,
                momentum: false,
            },
        });

        return () => swiper.destroy(true, false);
    }, [skills]);

    return (
        <div className="relative w-full overflow-hidden py-[30px]">
            {/* Fade di tepi kiri & kanan agar slide tidak terpotong secara kasar */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-[12%] bg-linear-to-r from-[#F9F6EE] dark:from-slate-900 to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-[12%] bg-linear-to-l from-[#F9F6EE] dark:from-slate-900 to-transparent"></div>

            <div ref={containerRef} className="swiper tech-swiper w-full box-border">
                <div className="swiper-wrapper">
                    {[...skills, ...skills].map((skill, index) => (
                        <div className="swiper-slide flex items-center py-2.5" key={`${skill.name}-${index}`}>
                            <div
                                className="group flex items-center gap-3 px-5 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-[8px] cursor-pointer transition-all duration-[400ms] hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/[0.07] hover:border-(--brand-color) hover:shadow-[0_12px_20px_-10px_rgba(0,0,0,0.5)]"
                                style={{ '--brand-color': skill.color }}
                            >
                                <div className="w-[26px] h-[26px] flex items-center justify-center shrink-0">
                                    <img
                                        src={skill.logo}
                                        alt={skill.name}
                                        loading="lazy"
                                        className="w-full h-full object-contain grayscale-[40%] opacity-80 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:drop-shadow-[0_0_6px_var(--brand-color)]"
                                    />
                                </div>
                                <span className="text-[0.95rem] font-semibold text-slate-700 dark:text-slate-100 whitespace-nowrap tracking-[0.2px]">
                                    {skill.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
