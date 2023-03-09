import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/Dialog";

interface ClicableImageProps {
  src: string;
}

const ClicableImage = ({ src }: ClicableImageProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <img src={src} alt="" className="cursor-zoom-in" />
      </DialogTrigger>
      <DialogContent className="w-3/5 cursor-none md:max-w-none">
        <img src={src} alt="" className="snap-center" />
      </DialogContent>
    </Dialog>
  );
};
export default ClicableImage;
