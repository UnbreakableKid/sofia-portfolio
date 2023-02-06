import { useState, useEffect } from "react";
import { Button } from "./Button";
import ThemeToggle from "./ThemeToggle";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  //get current language from html lang attribute
  const isTuga = i18n.language === "pt" ? "/pt/" : "/";

  const [fontStyle, setFontStyle] = useState("font-black");
  useEffect(() => {
    const fontStyles = ["font-sans", "font-serif", "font-mono"];
    const randomFontStyle =
      fontStyles[Math.floor(Math.random() * fontStyles.length)];
    setFontStyle(randomFontStyle);
  }, []);

  return (
    <div className="left-0 z-10 flex h-fit w-full place-content-between items-center justify-between">
      <a href={`${isTuga}`}>
        <Button
          variant="link"
          size="lg"
          className={`text-6xl ${fontStyle} hover:no-underline`}
          id="logo"
        >
          S
        </Button>
      </a>
      <div className="flex items-center">
        <a href={`${isTuga}trabalhos`}>
          <Button variant="link" className="text-2xl font-black">
            {t("header.work")}
          </Button>
        </a>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
