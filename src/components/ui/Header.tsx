import { useState, useEffect } from "react";
import { Button } from "./Button";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [fontStyle, setFontStyle] = useState("font-black");
  useEffect(() => {
    const fontStyles = ["font-sans", "font-serif", "font-mono"];
    const randomFontStyle =
      fontStyles[Math.floor(Math.random() * fontStyles.length)];
    setFontStyle(randomFontStyle);
  }, []);

  return (
    <div className="top-0 left-0 z-10 flex h-fit w-full place-content-between justify-between ">
      <a href="/">
        <Button
          variant="link"
          size="lg"
          className={` text-4xl ${fontStyle}`}
          id="logo"
        >
          S
        </Button>
      </a>
      <ThemeToggle />
    </div>
  );
};

export default Header;
