import { useEffect, useState } from "react";
import { Button } from "./Button";

const ThemeToggle: React.FC = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

    const handleClick = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <Button size={"sm"} variant="ghost" type="button" onClick={handleClick}>{theme === "light" ? "🌙" : "🌞"}</Button>
    );
}

export default ThemeToggle;
