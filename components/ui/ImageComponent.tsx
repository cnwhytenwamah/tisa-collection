import Image, { StaticImageData } from "next/image";

interface ImageComponentProps {
  src?: string | StaticImageData | null;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt,
  width,
  height,
  className,
}) => {

  const isValidSrc = typeof src === "string" ? src.trim() !== "" : !!src;

  if (!isValidSrc) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 text-gray-400 text-sm rounded-lg ${className || ""}`}
        style={{ width, height }}
      >
        No image
      </div>
    );
  }

  return (
    <div className={`relative ${className || ""}`}>
      <Image
        src={src as string | StaticImageData}
        alt={alt}
        width={width}
        height={height}
        className={className}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default ImageComponent;
