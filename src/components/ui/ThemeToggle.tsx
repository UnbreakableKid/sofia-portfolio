import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [currentTheme, setTheme] = useState(() => {
    if (import.meta.env.SSR) {
      return undefined;
    }
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    return "light";
  });

  const toggleTheme = () => {
    const theme = currentTheme === "light" ? "dark" : "light";
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (currentTheme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [currentTheme]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <button
      type="button"
      className="cursor-none hover:cursor-none hover:no-underline  focus:outline-none focus:ring-2 focus:ring-transparent focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 dark:focus:ring-transparent dark:focus:ring-white dark:focus:ring-offset-gray-900"
      onClick={toggleTheme}
      title="Toggle dark mode"
    >
      {currentTheme === "light" ? <Moon /> : <Sun />}
    </button>
  ) : (
    <div />
  );
};

export default ThemeToggle;
