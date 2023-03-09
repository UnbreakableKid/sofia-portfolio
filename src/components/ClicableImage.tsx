import { Dialog, DialogContent, DialogTrigger } from "./ui/Dialog";

interface ClicableImageProps {
  src: string;
}

const ClicableImage = ({ src }: ClicableImageProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <img
          src={src}
          alt=""
          className="max-w-3xl cursor-zoom-in snap-center"
        />
      </DialogTrigger>
      <DialogContent className="w-3/5 cursor-none md:max-w-none">
        <img src={src} alt="" className=" object-contain" />
      </DialogContent>
    </Dialog>
  );
};
export default ClicableImage;
