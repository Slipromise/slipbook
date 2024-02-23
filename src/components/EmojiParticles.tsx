import React, { useEffect, useState } from "react";
import styles from "../styles/components/EmojiParticles.module.scss";
import Container from "react-bootstrap/esm/Container";
import { random } from "lodash";

type Props = {
  likeCount: number;
  heartCount: number;
  customEmojis?: string[];
  customCounts?: number[];
  duration?: number;
  launchPosition?: "Bottom" | "BottomRight" | "BottomLeft" | "BottomCenter";
};

type IconItem = {
  id: number;
  content: string;
  targetX: number;
  delay: number;
  scale: number;
};

const iconIds = new Set<number>();

const iconGapTime = 50;

function EmojiParticles({ likeCount, launchPosition }: Props) {
  const [likeIcons, setLikeIcons] = useState<{
    items: IconItem[];
    prevCount: number;
    nextTime: number;
  }>(() => ({ items: [], prevCount: -1, nextTime: 0 }));

  useEffect(() => {
    // TODO: 節流 useThrottleFn
    setLikeIcons((origin) => {
      if (origin.prevCount >= likeCount || Date.now() < origin.nextTime) {
        return origin;
      }
      const items: IconItem[] = [];
      let delay = 0;
      let prevCount = origin.prevCount;
      for (let i = 0; i < likeCount - origin.prevCount && i < 100; i++) {
        const item: IconItem = {
          id: iconIds.size,
          content: "👍",
          targetX: Math.random(),
          delay,
          scale: random(1, 1.7),
        };
        iconIds.add(iconIds.size);
        items.push(item);
        delay += iconGapTime;
        prevCount = item.id;
      }
      return { items, prevCount, nextTime: Date.now() + delay };
    });
  }, [likeCount]);

  return (
    <Container className={styles.container} data-direction={launchPosition}>
      {likeIcons.items.map(({ id, content, delay, targetX, scale }) => (
        <span
          key={id}
          className={styles.icon}
          style={{
            "--delay": `${delay}ms`,
            "--scale": scale,
            left: `${targetX * 100}%`,
          }}
        >
          {content}
        </span>
      ))}
    </Container>
  );
}

export default EmojiParticles;
