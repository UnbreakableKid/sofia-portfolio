import { useTranslation } from "react-i18next";
import { Button } from "./Button";
import ThemeToggle from "./ThemeToggle";

const Footer = ({ children, contactLink, aboutLink }: any) => {
  const { t } = useTranslation();
  //get current language from html lang attribute

  return (
    <footer className=" bottom-0 left-0 z-10 flex w-full place-content-between items-center justify-between">
      <a href={aboutLink}>
        <Button variant="link" className="font-black md:text-2xl">
          {t("footer.about")}
        </Button>
      </a>
      <div className="flex items-center gap-2">
        {children}
        <ThemeToggle />
      </div>
      <a href={contactLink}>
        <Button variant="link" className="font-black md:text-2xl">
          {t("footer.contact")}
        </Button>
      </a>
    </footer>
  );
};

export default Footer;
