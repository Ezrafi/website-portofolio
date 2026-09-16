import { useState } from 'react';

const descriptions = {
    en: "I'm a Fullstack Developer focused on building modern web applications with React.js, TypeScript, and Node.js. Hands-on experience building a responsive e-learning platform, integrating APIs, and designing relational database schemas. Background in IT network infrastructure, with strong cross-team communication and technical documentation skills.",
    id: 'Saya adalah seorang Fullstack Developer yang fokus pada pembangunan aplikasi web modern dengan React.js, TypeScript, dan Node.js. Memiliki pengalaman praktis dalam membangun platform e-learning yang responsif, mengintegrasikan API, dan merancang skema basis data relasional. Berlatar belakang di bidang infrastruktur jaringan TI, dengan kemampuan komunikasi lintas tim dan dokumentasi teknis yang kuat untuk menciptakan solusi inovatif.',
};

export default function Hero() {
    const [lang, setLang] = useState('en');

    const buttonBase =
        "flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold no-underline text-[0.95rem] " +
        'transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)]';

    return (
        <section className="hero-section py-[60px] px-[5%] md:py-[120px] md:px-[10%] flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-[60px] items-center max-w-[1100px] text-center md:text-left">
                <div className="md:order-none order-first">
                    <img
                        src="/img/profiles1.png"
                        alt="Atha Profile"
                        className="w-full max-w-[250px] md:max-w-[350px] mx-auto rounded-3xl border-4 border-white dark:border-slate-800 shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-[1.02]"
                    />
                </div>

                <div className="hero-content">
                    <h1 className="m-0 text-[2.5rem] md:text-[3.5rem] font-extrabold tracking-[-0.03em] leading-[1.1]">
                        Hi, I'm Atha 👋
                    </h1>
                    <p className="mt-4 text-[1.25rem] font-semibold tracking-[-0.01em] text-green-500">
                        Fullstack Developer
                    </p>

                    <div className="my-6 md:my-[25px] mx-auto max-w-[600px]">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-3 text-[0.8rem] font-bold tracking-[0.05em]">
                            <button
                                onClick={() => setLang('en')}
                                className={`bg-transparent border-0 p-0 cursor-pointer font-bold transition-colors duration-200 ${
                                    lang === 'en'
                                        ? 'text-green-500'
                                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100'
                                }`}
                            >
                                EN
                            </button>
                            <span className="text-slate-500 dark:text-slate-400 opacity-40 select-none">|</span>
                            <button
                                onClick={() => setLang('id')}
                                className={`bg-transparent border-0 p-0 cursor-pointer font-bold transition-colors duration-200 ${
                                    lang === 'id'
                                        ? 'text-green-500'
                                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100'
                                }`}
                            >
                                ID
                            </button>
                        </div>

                        <p
                            key={lang}
                            className="lang-desc-enter m-0 text-slate-500 dark:text-slate-400 text-[1.05rem] font-normal leading-[1.8]"
                        >
                            {descriptions[lang]}
                        </p>
                    </div>

                    <div className="mb-[35px] flex flex-col items-center md:items-start gap-3">
                        <div className="info-item flex items-center gap-3 text-[0.95rem] text-slate-500 dark:text-slate-400">
                            <span>📍</span> Depok, Sawangan, Indonesia
                        </div>
                        <div className="info-item flex items-center gap-3 text-[0.95rem] text-slate-500 dark:text-slate-400">
                            <span className="relative inline-flex h-2.5 w-2.5">
                                <span className="absolute inset-0 rounded-full bg-green-500 animate-ping"></span>
                                <span className="relative rounded-full h-2.5 w-2.5 bg-green-500"></span>
                            </span>
                            Available for new projects
                        </div>
                    </div>

                    <div className="flex gap-4 justify-center md:justify-start">
                        <a href="https://wa.me/6287718047671" target="_blank" rel="noopener noreferrer" className={`${buttonBase} bg-green-500 text-white`}>
                            <img src="/img/whatsapp.png" alt="" width="20" /> Let's Talk
                        </a>
                        <a
                            href="https://drive.google.com/file/d/16lCGuSxdUup2XTU0rpc5PSPJhbA0hy8B/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${buttonBase} bg-slate-800 dark:bg-slate-100 text-[#F9F6EE] dark:text-slate-900`}
                        >
                            <i className="fas fa-file"></i>
                            <span>CV</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
