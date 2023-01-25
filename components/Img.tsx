import { FC } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  isCenter: boolean
}

const Img: FC<Props> = ({ src, alt, width = 500, height = 0, isCenter = true }) => {
  return (
    <div className={isCenter?'center-bloc' : ''}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority
        className="next-image"
      />
    </div>)
}

export default Img;