import React from "react";
import styles from "@/styles/components/WavyLoading.module.scss";

type Props = {
  text?: string;
  duration?: number;
};

export default function WavyLoading({
  text = "Loading...",
  duration = 2000,
}: Props) {
  return (
    <div
      className={styles.container}
      style={
        {
          "--duration": `${duration}ms`,
          "--length": text.length,
        } as React.CSSProperties
      }
    >
      {text.split("").map((char, index) => (
        <span key={index} style={{ "--i": index } as React.CSSProperties}>
          {char}
        </span>
      ))}
    </div>
  );
}
