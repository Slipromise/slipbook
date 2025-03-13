import React, { useState } from "react";
import styles from "@/styles/components/MagicMenuIndicator.module.scss";

type Props = {
  items: {
    label: string;
    onClick: () => void;
    color: string;
    icon: React.ReactNode;
  }[];
};

export default function MagicMenuIndicator({ items }: Props) {
  const [currentIndex, setCurrentIndex] = useState(() => 0);

  return (
    <div
      className={styles.container}
      style={
        {
          "--color": items[currentIndex].color,
          "--index": currentIndex,
        } as React.CSSProperties
      }
    >
      {items.map(({ onClick, icon, label }, index) => (
        <a
          key={index}
          onClick={() => {
            onClick();
            setCurrentIndex(index);
          }}
          href="javascript:void(0)"
          data-active={currentIndex === index}
        >
          {icon}
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
}
