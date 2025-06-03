import { Meta, StoryObj } from "@storybook/react";
import styles from "./SplitText.module.scss";
import { useEffect, useMemo, useRef } from "react";
import { easeOutBounce, easeOutElastic, easeOutQuart } from "@/utils/easing";

type Props = {
  text: string;
  duration?: number;
  delay?: number;
  type?: "words" | "lines" | "chars";
  ease?: "easeOutElastic" | "easeOutBounce" | "easeOutQuart";
};

function SplitText({
  text,
  delay = 100,
  duration = 600,
  type = "chars",
  ease = "easeOutQuart",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const chars = useMemo(
    () =>
      type === "lines"
        ? [text]
        : type === "words"
        ? text.split(" ").filter((word) => word.trim() !== "")
        : text.split(""),
    [text, type]
  );

  console.log(ref);

  useEffect(() => {
    let id: number;
    let start = -1;

    const draw = (time: number) => {
      if (start === -1) {
        start = time;
      }

      if (ref.current) {
        const container = ref.current;
        container.childNodes.forEach((child, i) => {
          if (child instanceof HTMLSpanElement) {
            const progress = Math.min(
              Math.max(time - start - i * delay, 0) / duration,
              1
            );
            const easedProgress =
              ease === "easeOutElastic"
                ? easeOutElastic(progress)
                : ease === "easeOutBounce"
                ? easeOutBounce(progress)
                : ease === "easeOutQuart"
                ? easeOutQuart(progress)
                : progress;

            child.style.setProperty("top", `${1 - easedProgress}em`);
            child.style.setProperty("opacity", `${easedProgress}`);
          }
        });
      }

      if (time - start < chars.length * delay + duration) {
        id = window.requestAnimationFrame(draw);
      }
    };
    if (ref.current) {
      id = window.requestAnimationFrame(draw);
    }
    return () => {
      if (id) {
        window.cancelAnimationFrame(id);
      }
    };
  }, [chars.length, delay, duration, ease]);

  return (
    <div className={styles.container} ref={ref}>
      {chars.map((char, i) => (
        <span key={i}>
          {char}
          {type === "words" && i < chars.length - 1 ? " " : ""}
        </span>
      ))}
    </div>
  );
}

const meta: Meta<typeof SplitText> = {
  component: SplitText,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
};

export default meta;

type Story = StoryObj<typeof SplitText>;

export const Default: Story = {
  args: {
    text: "Split Text",
  },
};

export const Words: Story = {
  args: {
    text: "Split Text into words",
    type: "words",
  },
};

export const Lines: Story = {
  args: {
    text: "Split Text into lines",
    type: "lines",
  },
};

export const EaseOutElastic: Story = {
  args: {
    text: "Split Text",
    ease: "easeOutElastic",
  },
};

export const EaseOutBounce: Story = {
  args: {
    text: "Split Text",
    ease: "easeOutBounce",
  },
};
