import CircularProgressBar from "@/components/CircularProgressBar";
import { Meta, StoryObj } from "@storybook/react";
import styles from './PixelizingFilter.module.scss'

type Props = {
  children?: React.ReactNode;
};

function PixelizingFilter({ children }: Props) {
  return (
    <div>
      <div className={styles.container} >{children}</div>
      <div className={styles.filter}></div>
      <svg style={{position:'absolute'}} >
        <filter id="pixelateStr" x="0" y="0" width="100%" height="100%">
          <feFlood x="1" y="1" height="1" width="1"></feFlood>
          <feComposite
            id="composite"
            in2="SourceGraphic"
            operator="in"
            width="8"
            height="8"
          ></feComposite>
          <feTile result="tiled"></feTile>
          <feComposite
            in="SourceGraphic"
            in2="tiled"
            operator="in"
          ></feComposite>
          <feMorphology
            id="morphology"
            operator="dilate"
            radius="4"
            result="dilatedPixelation"
          ></feMorphology>

          <feFlood
            x="1"
            y="1"
            height="1"
            width="1"
            result="floodFallbackX"
          ></feFlood>
          <feComposite
            id="compositeX"
            in2="SourceGraphic"
            operator="in"
            width="4"
            height="8"
          ></feComposite>
          <feTile result="fullTileX"></feTile>
          <feComposite
            in="SourceGraphic"
            in2="fullTileX"
            operator="in"
          ></feComposite>
          <feMorphology
            id="morphologyX"
            operator="dilate"
            radius="4"
            result="dilatedFallbackX"
          ></feMorphology>

          <feFlood x="1" y="1" height="1" width="1"></feFlood>
          <feComposite
            id="compositeY"
            in2="SourceGraphic"
            operator="in"
            width="8"
            height="4"
          ></feComposite>
          <feTile result="fullTileY"></feTile>
          <feComposite
            in="SourceGraphic"
            in2="fullTileY"
            operator="in"
          ></feComposite>
          <feMorphology
            id="morphologyY"
            operator="dilate"
            radius="4"
            result="dilatedFallbackY"
          ></feMorphology>
          <feMerge>
            <feMergeNode in="dilatedFallbackX"></feMergeNode>
            <feMergeNode in="dilatedFallbackY"></feMergeNode>
            <feMergeNode in="dilatedPixelation"></feMergeNode>
          </feMerge>
        </filter>
      </svg>
    </div>
  );
}

const meta: Meta<typeof PixelizingFilter> = {
  component: PixelizingFilter,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof PixelizingFilter>;

export const ProgressBarWithFilter: Story = {
  args: {
    children: <CircularProgressBar value={50} />,
  },
};
