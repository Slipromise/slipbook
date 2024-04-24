import React, { useMemo } from "react";
import Container from "react-bootstrap/esm/Container";
import Stack from "react-bootstrap/esm/Stack";
import styles from "@/styles/components/ScoreBoard.module.scss";
import dayjs from "dayjs";
import { useSpring, animated, AnimationConfig } from "@react-spring/web";

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
      }) as React.CSSProperties,
    [aScore, bScore]
  );

  const scores = useSpring<{ aScore: number; bScore: number }>({
    aScore,
    bScore,
    config: {
      duration: 300,
    } as AnimationConfig,
  });

  return (
    <Container className={styles.container} style={containerStyle}>
      <Stack direction="horizontal" data-team style={{ flexGrow: aScore }}>
        <span data-team-name data-testId="homeTitle">
          {aTitle}
        </span>
        <animated.span data-team-score data-testId="homeScore">
          {scores.aScore.to((n) => Math.floor(n))}
        </animated.span>
      </Stack>
      <Stack direction="horizontal" data-team style={{ flexGrow: bScore }}>
        <animated.span data-team-score data-testId="awayScore">
          {scores.bScore.to((n) => Math.floor(n))}
        </animated.span>
        <span data-team-name data-testId="awayTitle">
          {bTitle}
        </span>
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
