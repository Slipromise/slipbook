import React, { useState } from "react";
import styles from "@/styles/components/RadialMenu.module.scss";
import { IoCloseOutline } from "react-icons/io5";

type Props = {
  items: { component: React.ElementType; onClick: () => void }[];
};

export default function RadialMenu({ items }: Props) {
  const [isExpended, setIsExpended] = useState(() => false);

  return (
    <div
      className={styles.container}
      data-is-expended={isExpended}
      style={{ "--count": items.length } as React.CSSProperties}
    >
      <IoCloseOutline
        data-main-icon
        onClick={() => setIsExpended((prev) => !prev)}
      />
      {items.map(({ component: C, onClick }, i) => (
        <C
          key={i}
          onClick={onClick}
          className={styles.item}
          style={{ "--i": i } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
