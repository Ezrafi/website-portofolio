import useTheme from '../hooks/useTheme.js';

const navLinks = [
    { href: '#tech-stack', label: 'Tech Stack' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
];

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();

    const buttonBase =
        'flex items-center gap-1 md:gap-2 px-2.5 py-1.5 md:px-4 md:py-2 rounded-md md:rounded-lg ' +
        'text-xs md:text-[0.9rem] font-semibold no-underline whitespace-nowrap ' +
        'transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:opacity-90';

    return (
        <nav className="sticky top-0 z-[1000] h-[65px] md:h-20 px-[4%] md:px-[10%] flex items-center justify-between bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
            <div className="nav-left">
                <a
                    href="/"
                    className="inline-block bg-black text-white px-2 py-[5px] md:px-3 md:py-2 font-bold no-underline text-[0.9rem] md:text-xl"
                >
                    ATHA
                </a>
            </div>

            <div className="nav-right flex items-center gap-1.5 md:gap-[30px]">
                <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
                    {navLinks.map(({ href, label }) => (
                        <li key={href}>
                            <a
                                href={href}
                                className="relative text-[0.95rem] font-medium opacity-70 hover:opacity-100 hover:text-green-500 transition-all duration-300 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1.5 after:h-0.5 after:w-0 after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="nav-buttons flex items-center gap-3 max-[380px]:gap-2">
                    <a
                        href="https://wa.me/6287718047671"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${buttonBase} bg-green-500 text-white`}
                    >
                        <i className="fab fa-whatsapp text-sm md:text-base"></i>
                        <span className="max-[380px]:hidden">Let's Talk</span>
                    </a>

                    <a
                        href="https://drive.google.com/file/d/16lCGuSxdUup2XTU0rpc5PSPJhbA0hy8B/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${buttonBase} bg-slate-800 dark:bg-slate-100 text-[#F9F6EE] dark:text-slate-900`}
                    >
                        <i className="fas fa-file text-sm md:text-base"></i>
                        <span className="max-[380px]:hidden">CV</span>
                    </a>

                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle Theme"
                        className="relative w-8 h-8 md:w-[38px] md:h-[38px] md:ml-4 flex items-center justify-center bg-transparent border border-slate-200 dark:border-slate-700 rounded-lg cursor-pointer text-[0.85rem] md:text-base transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-green-500 max-md:before:content-[''] max-md:before:absolute max-md:before:-left-2 max-md:before:top-1/2 max-md:before:-translate-y-1/2 max-md:before:h-5 max-md:before:w-px max-md:before:bg-slate-200 dark:max-md:before:bg-slate-700 max-md:before:opacity-40"
                    >
                        <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
                    </button>
                </div>
            </div>
        </nav>
    );
}
