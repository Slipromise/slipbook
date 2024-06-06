import React, { useCallback, useMemo, useState } from "react";
import styles from "@/styles/components/InfiniteImageSlider.module.scss";
import Image, { StaticImageData } from "next/image";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { RxLoop } from "react-icons/rx";
import { useDebounce, useInterval } from "react-use";
import lodash, { debounce } from "lodash";
type Props = {
  images: (StaticImageData | string)[];
  isAuto?: boolean;
  autoFrequency?: number;
  onAuto?: () => void;
};

function InfiniteImageSlider({
  images,
  onAuto,
  isAuto,
  autoFrequency = 3000,
}: Props) {
  const [offset, setOffset] = useState(() => 0);

  const [inAction, setInAction] = useState(() => false);

  const indexes = useMemo<number[]>(() => {
    var result = [];
    for (let i = 0; i < 7; i++) {
      result[i] = offset + i;
    }
    return result;
  }, [offset]);

  const onNext = useCallback(() => {
    setOffset((prev) => (prev - 1 <= Number.MIN_SAFE_INTEGER ? 0 : prev - 1));
  }, []);

  const onPrev = useCallback(() => {
    setOffset((prev) => (prev + 1 >= Number.MAX_SAFE_INTEGER ? 0 : prev + 1));
  }, []);

  useDebounce(
    () => {
      setInAction(false);
    },
    300,
    [offset]
  );

  useInterval(
    onNext,
    isAuto && !inAction && autoFrequency > 200 ? autoFrequency : null
  );

  if (images.length <= 1) {
    return null;
  }

  return (
    <div className={styles.container}>
      {indexes.map((index) => (
        <div className={styles.item} key={index}>
          <Image
            src={
              index >= 0 || Math.abs(index % images.length) === 0
                ? images[index % images.length]
                : images[Math.abs(images.length + (index % images.length))]
            }
            alt=""
          />
        </div>
      ))}
      <div className={styles.buttons}>
        <IoIosArrowDropleft
          onClick={() => {
            onPrev();
            setInAction(true);
          }}
        ></IoIosArrowDropleft>
        <IoIosArrowDropright
          onClick={() => {
            onNext();
            setInAction(true);
          }}
        ></IoIosArrowDropright>
        <RxLoop onClick={onAuto} data-on={isAuto} />
      </div>
    </div>
  );
}

export default InfiniteImageSlider;
