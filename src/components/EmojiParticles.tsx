import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "../styles/components/EmojiParticles.module.scss";
import Container from "react-bootstrap/esm/Container";
import { random, isArray } from "lodash";
import { useUnmount } from "react-use";

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

const iconGapTime = 50;

// TODO:動畫銜接時振幅會重置
// TODO:截流五秒偏長
// TODO:順序會太固定 👍 > ❤️ > Custom

function EmojiParticles({
  likeCount,
  heartCount,
  launchPosition = "Bottom",
  customCounts = [],
  customEmojis,
  duration = 5000,
}: Props) {
  const throttleArgs = useMemo(
    () => [likeCount, heartCount, ...customCounts],
    [customCounts, heartCount, likeCount]
  );

  const iconItems = useThrottleIcons(duration, throttleArgs);

  return (
    <Container className={styles.container} data-direction={launchPosition}>
      {iconItems.map(({ id, content, delay, targetX, scale }) => (
        <span
          key={id}
          className={styles.icon}
          style={
            {
              "--delay": `${delay}ms`,
              "--scale": scale,
              left: `${targetX * 100}%`,
            } as React.CSSProperties
          }
        >
          {/^CUSTOM-/.test(content) && customEmojis
            ? customEmojis[Number(content.replace(/^CUSTOM-/, ""))]
            : content}
        </span>
      ))}
    </Container>
  );
}

export default EmojiParticles;

const useThrottleIcons = (ms: number = 5000, args: number[]) => {
  const [state, setState] = useState<IconItem[]>([]);
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const currentArgs = useRef<number[]>([0, 0]);
  const nextArgs = useRef<number[]>();
  const iconIds = useRef<Set<number>>(new Set());

  useEffect(() => {
    if (args.length !== currentArgs.current.length) {
      currentArgs.current.length = args.length;
      currentArgs.current.fill(0);
    }

    if (isArray(nextArgs.current) && args.length !== nextArgs.current.length) {
      nextArgs.current.length = args.length;
      nextArgs.current.fill(0);
    }

    const setter: React.SetStateAction<IconItem[]> = (origin) => {
      if (
        compareArray(currentArgs.current, nextArgs.current) &&
        compareArray(currentArgs.current, args)
      ) {
        return origin;
      }

      if (nextArgs.current === undefined) {
        nextArgs.current = args;
      }

      const limitCount = ms / iconGapTime;
      const result = origin.slice(-limitCount);
      let addIndex = 0;
      let isOver = false;

      for (let i = 0; i < currentArgs.current.length; i++) {
        const currentArg = currentArgs.current[i];
        const nextArg = nextArgs.current[i];

        isOver = nextArg - currentArg > limitCount ? true : false;

        const count = isOver ? limitCount : nextArg - currentArg;

        currentArgs.current[i] += count;
        for (let ii = 0; ii < count; ii++) {
          const item: IconItem = {
            id: iconIds.current.size,
            content: i === 0 ? "👍" : i === 1 ? "❤️" : `CUSTOM-${2 - i}`,
            targetX: Math.random(),
            delay: iconGapTime * addIndex,
            scale: random(1, 1.7),
          };
          result.push(item);
          iconIds.current.add(item.id);
          addIndex++;
        }
        if (isOver) {
          break;
        }
      }
      if (!isOver) {
        nextArgs.current = undefined;
      }

      return result;
    };

    if (!timeout.current) {
      setState(setter);
      const timeoutCallback = () => {
        if (nextArgs.current) {
          setState(setter);
          // setState((origin) => {});
          timeout.current = setTimeout(timeoutCallback, ms);
        } else {
          timeout.current = undefined;
          // TODO: 清除時動畫演一半
        }
      };
      timeout.current = setTimeout(timeoutCallback, ms);
    } else {
      nextArgs.current = args;
    }
  }, args);

  useUnmount(() => {
    timeout.current && clearTimeout(timeout.current);
  });

  return state;
};

const compareArray = (a: number[], b: number[] | undefined): boolean => {
  if (b === undefined) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    const aItem = a[i];
    const bItem = b[i];
    if (aItem !== bItem) {
      return false;
    }
  }
  return true;
};
