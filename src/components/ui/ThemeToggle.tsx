import { useState, useEffect } from "react";
import { Button } from "./Button";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
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
    <Button
      size={"sm"}
      variant="link"
      type="button"
      className="hover:no-underline focus:ring-transparent dark:focus:ring-transparent"
      onClick={handleClick}
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </Button>
  );
};

export default ThemeToggle;
