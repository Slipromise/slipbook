import React, { useCallback, useMemo, useState } from "react";
import styles from "@/styles/components/LuckySpinningWheel.module.scss";

type Props = {};

// TODO: 由Props來控制(結果、數量)
function LuckySpinningWheel({}: Props) {
  const [angle, setAngle] = useState(() => 0);

  const onSpin = useCallback(() => {
    setAngle((pre) => pre + Math.ceil(Math.random() * 3600));
  }, []);

  const wheelStyles = useMemo(() => {
    return {
      outside: {
        transform: `rotate(${angle}deg)`,
      },
      inside: {
        transform: `rotate(-${angle}deg)`,
      },
    };
  }, [angle]);

  return (
    <div className={styles.container}>
      <div className={styles.wheel} style={wheelStyles.outside}>
        <span style={{ "--i": 0 } as React.CSSProperties}></span>
        <span style={{ "--i": 1 } as React.CSSProperties}></span>
        <span style={{ "--i": 2 } as React.CSSProperties}></span>
        <span style={{ "--i": 3 } as React.CSSProperties}></span>
        <div className={styles.numbers}>
          <b style={{ "--i": 0 } as React.CSSProperties}>5</b>
          <b style={{ "--i": 1 } as React.CSSProperties}>1</b>
          <b style={{ "--i": 2 } as React.CSSProperties}>4</b>
          <b style={{ "--i": 3 } as React.CSSProperties}>6</b>
          <b style={{ "--i": 4 } as React.CSSProperties}>2</b>
          <b style={{ "--i": 5 } as React.CSSProperties}>8</b>
          <b style={{ "--i": 6 } as React.CSSProperties}>7</b>
          <b style={{ "--i": 7 } as React.CSSProperties}>3</b>
        </div>
      </div>
      <div
        className={`${styles.wheel} ${styles.inner}`}
        style={wheelStyles.inside}
      >
        <span style={{ "--i": 0 } as React.CSSProperties}></span>
        <span style={{ "--i": 1 } as React.CSSProperties}></span>
        <span style={{ "--i": 2 } as React.CSSProperties}></span>
        <span style={{ "--i": 3 } as React.CSSProperties}></span>
        <div className={styles.numbers}>
          <b style={{ "--i": 0 } as React.CSSProperties}>5</b>
          <b style={{ "--i": 1 } as React.CSSProperties}>1</b>
          <b style={{ "--i": 2 } as React.CSSProperties}>4</b>
          <b style={{ "--i": 3 } as React.CSSProperties}>6</b>
          <b style={{ "--i": 4 } as React.CSSProperties}>2</b>
          <b style={{ "--i": 5 } as React.CSSProperties}>8</b>
          <b style={{ "--i": 6 } as React.CSSProperties}>7</b>
          <b style={{ "--i": 7 } as React.CSSProperties}>3</b>
        </div>
      </div>
      <div className={styles.spinBtn} onClick={onSpin}>
        Spin
      </div>
    </div>
  );
}

export default LuckySpinningWheel;
