"use client";

import { ComponentProps } from "react";
import PokerCard from "./PokerCard";
import styles from "@/styles/components/HoldemBoardBar.module.scss";
import { useSpring, animated } from "@react-spring/web";

type PokerCard = ComponentProps<typeof PokerCard>["value"];

type Props = {
  cards?: PokerCard[];
  pot: number;
  subtitle: string;
  locale?: string;
};

function HoldemBoardBar({ cards, pot, subtitle, locale = "en-US" }: Props) {
  const springValues = useSpring({
    pot,
    config: {
      duration: 300,
    },
  });
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {cards?.map((item) => (
          <PokerCard value={item} key={item} />
        ))}
      </div>
      <div className={styles.body}>
        <span>POT</span>{" "}
        <animated.span>
          {springValues.pot.to((n) =>
            new Intl.NumberFormat(locale, {
              style: "currency",
              // TODO: check formatting
              currency: "USD",
            }).format(n)
          )}
        </animated.span>
      </div>
      <div className={styles.footer}>
        <span>{subtitle}</span>
      </div>
    </div>
  );
}

export default HoldemBoardBar;
