import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type Props = {
  image: React.ReactNode;
};

const TimeloneImage = ({ image }: Props) => {
  const imageSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imageSection = imageSectionRef.current;
    const maxScroll = imageSection.offsetHeight - window.innerHeight;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollPercent = (scrollY / maxScroll) * 100;
      gsap.to(imageSection, {
        yPercent: -scrollPercent,
        ease: "none",
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="image-section h-[calc(100vh-308px)] overflow-visible pb-32 md:h-[calc(100vh-50px)] "
      ref={imageSectionRef}
    >
      {/* Conditional binding of image source based on theme */}
      {image}
    </div>
  );
};

export default TimeloneImage;
