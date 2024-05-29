import React, { useMemo, useState } from "react";
import styles from "@/styles/components/InfiniteImageSlider.module.scss";
import Image, { StaticImageData } from "next/image";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

type Props = {
  images: (StaticImageData | string)[];
};

function InfiniteImageSlider({ images }: Props) {
  const [offset, setOffset] = useState(() => 0);

  const fixImages = useMemo(() => {
    const result: { src: StaticImageData | string; key: number }[] = new Array(
      7
    );
    for (let i = 0; i < 7; i++) {
      const src = images[(i + offset) % images.length];
      // TODO: 會有錯誤，Key重複
      result[i] = {
        src,
        key: images.indexOf(src),
      };
    }
    return result;
  }, [images, offset]);

  if (images.length <= 1) {
    return null;
  }

  // TODO: 後退有問題
  //   console.log(fixImages.map(({ key }) => key));

  return (
    <div className={styles.container}>
      {fixImages.map(({ src, key }, index) => (
        <div className={styles.item} key={key}>
          <Image src={src} alt="" />
        </div>
      ))}
      <div className={styles.buttons}>
        <IoIosArrowDropleft
          onClick={() => {
            setOffset((prev) => (prev === 0 ? images.length : prev - 1));
          }}
        ></IoIosArrowDropleft>
        <IoIosArrowDropright
          onClick={() => {
            setOffset((prev) => prev + 1);
          }}
        ></IoIosArrowDropright>
      </div>
    </div>
  );
}

export default InfiniteImageSlider;
