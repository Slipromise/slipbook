import React, { HTMLAttributes, useMemo } from "react";
import styles from "@/styles/components/CircularProgressBar.module.scss";
import { AnimationConfig, useSpring, animated } from "@react-spring/web";

type Props = {
  value: number;
  title?: string;
  color?: string;
  duration?: number;
};

function CircularProgressBar({
  value = 0,
  title,
  color,
  duration = 400,
}: Props) {
  const containerStyle = useMemo<
    HTMLAttributes<HTMLDivElement>["style"]
  >(() => {
    const percent = Math.floor(value);

    return {
      "--percent": `${percent}%`,
      "--color": color,
      "--duration": `${duration}ms`,
    } as HTMLAttributes<HTMLDivElement>["style"];
  }, [color, duration, value]);

  const animatedValues = useSpring<{ percent: number }>({
    percent: value,
    config: {
      duration,
    } as AnimationConfig,
  });

  return (
    <div className={styles.container} style={containerStyle}>
      <animated.h1>
        {animatedValues.percent.to((n) => Math.floor(n))}
      </animated.h1>
      {title && <h2>{title}</h2>}
    </div>
  );
}

export default CircularProgressBar;
