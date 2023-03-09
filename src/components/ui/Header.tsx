import { useState, useEffect } from "react";
import { Button } from "./Button";
import { useTranslation } from "react-i18next";

const Header = ({
  homeLink,
  workLink,
}: {
  homeLink: string;
  workLink: string;
}) => {
  const { t } = useTranslation();
  //get current language from html lang attribute

  const [fontStyle, setFontStyle] = useState("font-black");
  useEffect(() => {
    const fontStyles = ["font-sans", "font-serif", "font-mono"];
    const randomFontStyle =
      fontStyles[Math.floor(Math.random() * fontStyles.length)];
    setFontStyle(randomFontStyle);
  }, []);

  return (
    <header className="left-0 z-10 flex h-fit w-full place-content-between items-center justify-between">
      <a href={`${homeLink}`}>
        <Button
          variant="link"
          size="lg"
          className={`md:text-6xl ${fontStyle} hover:no-underline`}
          id="logo"
        >
          S
        </Button>
      </a>
      <a href={`${workLink}`}>
        <Button variant="link" className="font-black md:text-2xl">
          {t("header.work")}
        </Button>
      </a>
    </header>
  );
};

export default Header;
