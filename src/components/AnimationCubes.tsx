import React, { useState } from "react";
import styles from "@/styles/components/AnimationCubes.module.scss";
import { useInterval } from "react-use";
import { sample } from "lodash";

type Props = { updateRate?: number; duration?: number };

const CUBE_SIDE = [-3, -2, -1, 0, 1, 2, 3];

export default function AnimationCubes({
  updateRate = 500,
  duration = 2000,
}: Props) {
  const [activeIndexes, setActiveIndexes] = useState<string[]>(() => []);

  useInterval(
    () => {
      let activeIndex: string;

      setActiveIndexes((pre) => {
        activeIndex = `${sample(CUBE_SIDE)},${sample(CUBE_SIDE)}`;
        while (pre.includes(activeIndex)) {
          activeIndex = `${sample(CUBE_SIDE)},${sample(CUBE_SIDE)}`;
        }
        pre.push(activeIndex);
        return [...pre];
      });

      setTimeout(() => {
        setActiveIndexes((pre) => pre.filter((v) => v !== activeIndex));
      }, duration);
    },
    CUBE_SIDE.length * CUBE_SIDE.length > activeIndexes.length
      ? updateRate
      : undefined
  );

  return (
    <div
      className={styles.container}
      style={{ "--duration": `${duration}ms` } as React.CSSProperties}
    >
      {CUBE_SIDE.map((z, i) => (
        <div
          key={i}
          style={{ "--z": z } as React.CSSProperties}
          className={styles.cube}
        >
          {CUBE_SIDE.map((x, _i) => (
            <div style={{ "--x": x } as React.CSSProperties} key={_i}>
              <span
                className={
                  activeIndexes.includes(`${z},${x}`)
                    ? styles.active
                    : undefined
                }
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
