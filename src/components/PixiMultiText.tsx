import { Container, Text } from "@pixi/react";
import { TextStyle } from "pixi.js";
import React from "react";

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
    <Container>
      {species.map(({ style, offset }, i) => (
        <Text
          key={i}
          text={text}
          style={style}
          x={offset?.x}
          y={offset?.y}
        ></Text>
      ))}
    </Container>
  );
}
