import React, { useMemo } from "react";
import Container from "react-bootstrap/esm/Container";
import Stack from "react-bootstrap/esm/Stack";
import styles from "../styles/components/ScoreBoard.module.scss";
import dayjs from "dayjs";

type Props = {
  aTitle: string;
  bTitle: string;
  aScore: number;
  bScore: number;
  countDownTime?: number;
  countDownFormat?: "HH:mm" | "HH:mm:ss" | "mm:ss" | "ss.SSS";
  subTitle?: string;
};

function ScoreBoard({
  aTitle,
  aScore,
  bTitle,
  bScore,
  countDownTime,
  countDownFormat = "mm:ss",
  subTitle,
}: Props) {
  const containerStyle = useMemo<React.CSSProperties>(
    () =>
      ({
        "--percent": `${(aScore / (aScore + bScore)) * 100}%`,
      } as React.CSSProperties),
    [aScore, bScore]
  );

  return (
    <Container className={styles.container} style={containerStyle}>
      <Stack direction="horizontal" data-team style={{ flexGrow: aScore }}>
        <span data-team-name>{aTitle}</span>
        <span data-team-score>{aScore}</span>
      </Stack>
      <Stack direction="horizontal" data-team style={{ flexGrow: bScore }}>
        <span data-team-score>{bScore}</span>
        <span data-team-name>{bTitle}</span>
      </Stack>
      {countDownTime && (
        <span data-countdown>
          {dayjs.duration(countDownTime).format(countDownFormat)}
        </span>
      )}
      {subTitle && <span data-subtitle>{subTitle}</span>}
    </Container>
  );
}

export default ScoreBoard;
