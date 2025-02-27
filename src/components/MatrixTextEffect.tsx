import { useEffect, useMemo, useRef } from "react";
import { useInterval, useWindowSize } from "react-use";
import styles from "@/styles/components/MatrixTextEffect.module.scss";


type Props = {
  text?: string;
  fontSize?: number;
  refreshRate?: number;
};

export default function MatrixTextEffect({
  text = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890<!@#$%^&*()",
  fontSize = 15,
  refreshRate = 50,
}: Props) {
  const { width, height } = useWindowSize();

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drops = useRef<number[]>([]);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.canvas.width = width;
        ctx.canvas.height = height;
      }
    }
    drops.current = Array.from({ length: width / fontSize }, () => 99999);
  }, [fontSize, height, width]);

  const chars = useMemo(() => text.split(""), [text]);

  useInterval(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = "rgba(0,0,0,0.1)";
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = "#0F0";
        ctx.font = `${fontSize}px arial`;
        ctx.textAlign = "center";

        drops.current = drops.current.map((drop, index) => {
          const char = chars[Math.floor(Math.random() * chars.length)];
          ctx.fillText(char, index * fontSize, drop * fontSize);
          return drop * fontSize >= height && Math.random() > 0.975 ? 0 : drop + 1;
        });
      }
    }
  }, refreshRate);

  return <div className={styles.container} ><canvas ref={canvasRef}  /></div>;
}
