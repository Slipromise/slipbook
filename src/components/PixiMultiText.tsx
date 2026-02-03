// import "@pixi/react";
import { TextStyle } from "pixi.js";

type LayerSpec = {
  style: TextStyle;
  offset?: { x?: number; y?: number };
};

type Props = {
  text?: string;
  species: LayerSpec[];
};

export default function PixiMultiText({ text, species }: Props) {
  return (
    <pixiContainer>
      {species?.map(({ style, offset }, i) => (
        <pixiText
          key={i}
          text={text}
          style={style}
          x={offset?.x}
          y={offset?.y}
        ></pixiText>
      ))}
    </pixiContainer>
  );
}
