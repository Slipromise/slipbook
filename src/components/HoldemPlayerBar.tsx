"use client";

import { ComponentProps, useMemo, useRef } from "react";
import Container from "react-bootstrap/esm/Container";
import Stack from "react-bootstrap/esm/Stack";
import styles from "@/styles/components/HoldemPlayerBar.module.scss";
import { CSSTransition } from "react-transition-group";
import { useSpring, animated } from "@react-spring/web";
import PokerCard from "./PokerCard";
import { Image } from "react-bootstrap";

type PokerCard = ComponentProps<typeof PokerCard>["value"];

type Props = {
  avatarUri: string;
  chipAmount: number;
  name: string;
  status: string;
  cards: [PokerCard, PokerCard];
  position: "BB" | "SB" | "D" | "CO" | "UTG";
  isTurn: boolean;
  locale?: string;
};

function HoldemPokerPlayerBar({
  avatarUri,
  chipAmount,
  name,
  status = "",
  cards,
  position,
  isTurn,
  locale = "en-US",
}: Props) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const isIn = useMemo(() => status !== "FOLD", [status]);
  const springValues = useSpring({
    chipAmount,
    config: {
      duration: 300,
    },
  });
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isIn}
      timeout={{ appear: 400, enter: 400, exit: 300 }}
      classNames={styles.container}
      appear
      unmountOnExit
    >
      <Container
        className={styles.container}
        ref={nodeRef}
        data-is-turn={isTurn}
      >
        <Stack data-left>
          <Image src={avatarUri} alt="" />
          <animated.span>
            {springValues.chipAmount.to((n) =>
              new Intl.NumberFormat(locale, {
                style: "decimal",
                notation: "compact",
                compactDisplay: "short",
                maximumSignificantDigits: 3,
                roundingMode: "trunc",
              }).format(n)
            )}
          </animated.span>
        </Stack>
        <Stack data-middle>
          <div data-cards>
            <PokerCard value={cards[0]} />
            <PokerCard value={cards[1]} />
          </div>
          <div data-name-container>
            <span>{name}</span>
          </div>
          <div data-status-container>
            <span>{status}</span>
          </div>
        </Stack>
        <span data-position={position}>{position}</span>
      </Container>
    </CSSTransition>
  );
}

export default HoldemPokerPlayerBar;
