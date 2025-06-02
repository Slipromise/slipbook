import type { Meta, StoryObj } from "@storybook/react";
import styles from "./DotBackgroundAnimation.module.scss";
import { CSSProperties, useEffect, useMemo, useRef } from "react";

function DotBackgroundAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  const dots = useMemo(() => {
    const length =
      Math.ceil(window.innerWidth / 50) * Math.ceil(window.innerHeight / 50);
    return Array.from({ length }).fill("");
  }, []);

  useEffect(() => {
    const eventListener = (event: MouseEvent) => {
      containerRef.current?.style.setProperty(
        "--mouse-x",
        `${event.clientX}px`
      );
      containerRef.current?.style.setProperty(
        "--mouse-y",
        `${event.clientY}px`
      );

      containerRef.current
        ?.querySelectorAll(`.${styles.dot}`)
        .forEach((dot) => {
          const x = (dot as HTMLElement).offsetLeft - event.clientX + 25;
          const y = (dot as HTMLElement).offsetTop - event.clientY + 25;

          const dist = Math.sqrt(x * x + y * y);
          const scroe = Math.exp(dist * -0.01);
          (dot as HTMLElement).style.setProperty("--scale", `${scroe * 6}`);
        });
    };

    window.document.addEventListener("mousemove", eventListener);

    return () => {
      window.document.removeEventListener("mousemove", eventListener);
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      {dots.map((_, index) => (
        <div
          key={index}
          className={styles.dot}
          style={{ "--i": index } as CSSProperties}
        />
      ))}
    </div>
  );
}

const meta: Meta<typeof DotBackgroundAnimation> = {
  component: DotBackgroundAnimation,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;

type Story = StoryObj<typeof DotBackgroundAnimation>;

export const Default: Story = {};
