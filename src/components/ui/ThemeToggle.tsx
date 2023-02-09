import { useState, useEffect } from "react";
import { Button } from "./Button";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (import.meta.env.SSR) {
      return undefined;
    }
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  const toggleTheme = () => {
    const t = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", t);
    setTheme(t);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [theme]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <Button
      size={"sm"}
      variant="link"
      type="button"
      className="hover:no-underline focus:ring-transparent dark:focus:ring-transparent"
      onClick={toggleTheme}
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </Button>
  ) : (
    <div />
  );
};

export default ThemeToggle;
