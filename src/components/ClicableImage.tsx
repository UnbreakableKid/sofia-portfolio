import type React from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/Dialog";

interface ClicableImageProps {
  thumbnail?: React.ReactNode;
  fullImage?: React.ReactNode;
  classNamesThumb?: string;
}

const ClicableImage = ({
  thumbnail,
  fullImage,
  classNamesThumb,
}: ClicableImageProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className={`max-h-screen cursor-zoom-in snap-center  ${classNamesThumb}`}
        >
          {thumbnail}
        </div>
      </DialogTrigger>
      <DialogContent className="cursor-none md:w-3/5 md:max-w-none">
        {fullImage}
      </DialogContent>
    </Dialog>
  );
};
export default ClicableImage;
