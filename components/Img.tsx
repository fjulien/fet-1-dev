import { FC } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const Img: FC<Props> = ({ src, alt, width = 500, height = 0 }) => {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority
        className="next-image"
      />
    </>)
}

export default Img;