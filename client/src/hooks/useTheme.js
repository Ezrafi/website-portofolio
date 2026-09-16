import { useEffect, useState } from 'react';

function getInitialTheme() {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
}

export default function useTheme() {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'));

    return { theme, toggleTheme };
}
