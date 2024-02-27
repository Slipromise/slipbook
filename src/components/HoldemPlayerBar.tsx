import numeral from "numeral";
import React, { useMemo, useRef } from "react";
import Container from "react-bootstrap/esm/Container";
import Stack from "react-bootstrap/esm/Stack";
import styles from "../styles/components/HoldemPlayerBar.module.scss";
import { CSSTransition } from "react-transition-group";
import { useSpring, animated } from "@react-spring/web";

type PokerCard =
  | "SA"
  | "S2"
  | "S3"
  | "S4"
  | "S5"
  | "S6"
  | "S7"
  | "S8"
  | "S9"
  | "ST"
  | "SJ"
  | "SQ"
  | "SK"
  | "HA"
  | "H2"
  | "H3"
  | "H4"
  | "H5"
  | "H6"
  | "H7"
  | "H8"
  | "H9"
  | "HT"
  | "HJ"
  | "HQ"
  | "HK"
  | "DA"
  | "D2"
  | "D3"
  | "D4"
  | "D5"
  | "D6"
  | "D7"
  | "D8"
  | "D9"
  | "DT"
  | "DJ"
  | "DQ"
  | "DK"
  | "CA"
  | "C2"
  | "C3"
  | "C4"
  | "C5"
  | "C6"
  | "C7"
  | "C8"
  | "C9"
  | "CT"
  | "CJ"
  | "CQ"
  | "CK"
  | undefined;

type Props = {
  avatarUri: string;
  chipAmount: number;
  name: string;
  status: string;
  cards: [PokerCard, PokerCard];
  position: "BB" | "SB" | "D" | "CO" | "UTG";
  isTurn: boolean;
};

// TODO: CSSTransition 優化 （裝飾器or 父層Wrap）

function HoldemPokerPlayerBar({
  avatarUri,
  chipAmount,
  name,
  status = "",
  cards,
  position,
  isTurn,
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
          <img src={avatarUri} alt="" />
          <animated.span>
            {springValues.chipAmount.to((n) =>
              numeral(n).format("0a", Math.floor)
            )}
          </animated.span>
        </Stack>
        <Stack data-middle>
          <div data-cards>
            <div data-card={cards[0] ? cards[0] : ""}>
              <span data-front-card>{cards[0]?.[1]}</span>
              <span data-back-card></span>
            </div>
            <div data-card={cards[1] ? cards[1] : ""}>
              <span data-front-card>{cards[1]?.[1]}</span>
              <span data-back-card></span>
            </div>
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
