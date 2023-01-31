import { Button } from "./Button";

const Footer = () => {
  return (
    <div className=" bottom-0 left-0 z-10 flex w-full place-content-between items-end justify-between">
      <Button variant="link" className="text-2xl font-black">
        sobre
      </Button>
      <a href="/contactos">
        <Button variant="link" className="text-2xl font-black">
          contactos
        </Button>
      </a>
    </div>
  );
};

export default Footer;
