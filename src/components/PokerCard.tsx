import React from "react";
import styles from "@/styles/components/PokerCard.module.scss";

type PokerCardValue =
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
  value: PokerCardValue;
};

function PokerCard({ value }: Props) {
  return (
    <div className={styles.container} data-card={value ? value : ""}>
      <span data-front-card>{value?.[1]}</span>
      <span data-back-card></span>
    </div>
  );
}

export default PokerCard;
