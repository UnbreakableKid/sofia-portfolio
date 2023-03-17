import React from "react";

const LoadingImage = ({
  alt,
  ...props
}: React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>) => {
  const [didLoad, setLoad] = React.useState(false);

  return (
    <div className="flex justify-center">
      <img
        src={didLoad ? props.src : "/images/placeholder.png"}
        alt={alt}
        {...props}
        className={`${props.className} aspect-square h-72  object-contain ${
          didLoad ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoad(true)}
      />
    </div>
  );
};
export default LoadingImage;
