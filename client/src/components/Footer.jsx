const socials = [
    { href: 'https://github.com/Ezrafi', label: 'GitHub', icon: 'fab fa-github' },
    { href: 'https://www.linkedin.com/in/athaezrafi/', label: 'LinkedIn', icon: 'fab fa-linkedin' },
    { href: 'https://www.instagram.com/athaezrafi', label: 'Instagram', icon: 'fab fa-instagram' },
];

const logoClass =
    'inline-block bg-black text-white px-2 py-[5px] md:px-3 md:py-2 font-bold no-underline text-[0.9rem] md:text-xl';

export default function Footer() {
    return (
        <footer className="bg-[#F9F6EE] dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 pt-[60px] pb-[30px] mt-20">
            <div className="max-w-[1200px] mx-auto px-[5%]">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-[30px] mb-10">
                    <div className="footer-brand">
                        <a href="/" className={logoClass}>
                            ATHA
                        </a>
                        <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-[300px] mx-auto md:mx-0 text-[0.95rem]">
                            Building digital experiences with passion and precision.
                        </p>
                    </div>

                    <div className="flex gap-5">
                        {socials.map(({ href, label, icon }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="text-slate-800 dark:text-slate-100 text-2xl transition-all duration-300 hover:text-green-500 hover:-translate-y-[3px]"
                            >
                                <i className={icon}></i>
                            </a>
                        ))}
                    </div>
                </div>

                <hr className="border-0 border-t border-slate-200 dark:border-slate-700 mb-[30px]" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-2.5 text-slate-500 dark:text-slate-400 text-[0.85rem]">
                    <p>&copy; {new Date().getFullYear()} Atha. All rights reserved.</p>
                    <p>
                        Made with <i className="fas fa-heart" style={{ color: '#ef4444' }}></i> in Indonesia
                    </p>
                </div>
            </div>
        </footer>
    );
}
