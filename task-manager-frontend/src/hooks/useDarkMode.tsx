import {useEffect, useState} from "react";

const DARK : string = 'dark';
const LIGHT : string = 'light';
const THEME : string = 'theme';

export default function useDarkMode() {
    const [targetTheme, setTargetTheme] = useState(localStorage.theme);

    const currentTheme = targetTheme === DARK ? LIGHT : DARK;
    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove(currentTheme);
        root.classList.add(targetTheme);

        localStorage.setItem(THEME, targetTheme);
    })

    return [currentTheme, setTargetTheme];
}
