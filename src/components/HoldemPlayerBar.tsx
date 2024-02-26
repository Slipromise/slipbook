import numeral from "numeral";
import React from "react";
import Container from "react-bootstrap/esm/Container";
import Stack from "react-bootstrap/esm/Stack";
import styles from "../styles/components/HoldemPlayerBar.module.scss";

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
  | "CK";

type Props = {
  avatarUri: string;
  chipAmount: number;
  name: string;
  status: string;
  cards: [PokerCard, PokerCard];
  position: "BB" | "SB" | "D" | "CO" | "UTG";
  isTurn: boolean;
};

function HoldemPokerPlayerBar({
  avatarUri,
  chipAmount,
  name,
  status = "",
  cards,
  position,
}: Props) {
  return (
    <Container className={styles.container}>
      <Stack data-left>
        <img src={avatarUri} alt="" />
        <span>{numeral(chipAmount).format("0a", Math.floor)}</span>
      </Stack>
      <Stack data-middle>
        <div data-cards>
          <span data-card={cards[0]}>{cards[0][1]}</span>
          <span data-card={cards[1]}>{cards[1][1]}</span>
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
  );
}

export default HoldemPokerPlayerBar;
