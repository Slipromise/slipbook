import React, { useCallback, useMemo, useState } from "react";
import styles from "../styles/components/LuckySpinningWheel.module.scss";

type Props = {
  items: { label: string; value: string | number }[];
  result?: string | number;
  onSpin: () => void;
};

function LuckySpinningWheel({ items, result, onSpin }: Props) {
  const wheelStyles = useMemo(() => {
    var position = items.findIndex((item) => item.value === result);

    return {
      outside: {
        "--count": items.length,
        "--position": position,
      } as React.CSSProperties,
    };
  }, [items, result]);

  return (
    <div className={styles.container}>
      <div
        className={styles.wheel}
        style={wheelStyles.outside}
        data-result={result}
      >
        {items.map(({ value }, index) => (
          <span
            key={value}
            style={
              {
                "--i": index,
              } as React.CSSProperties
            }
          />
        ))}
        <div className={styles.numbers}>
          {items.map(({ label, value }, index) => (
            <b
              key={value}
              style={
                {
                  "--i": index,
                } as React.CSSProperties
              }
              data-hinting={value === result}
            >
              {label}
            </b>
          ))}
        </div>
      </div>
      {result !== undefined && (
        <div
          className={styles.spinBtn}
          onClick={result === undefined ? undefined : onSpin}
        >
          Spin
        </div>
      )}
    </div>
  );
}

export default LuckySpinningWheel;
