import { useMemo } from "react";
import * as d3 from "d3";

type Props = {
  data: Data;
  width?: number;
};

type Data = {
    name: string;
    children?: (Data)[];
    value?: number;
};

type Node = d3.HierarchyRectangularNode<Data> & {
    x0: number;
    y0: number;
    x1: number;
    y1: number;
};

const SunburstChart = ({ data ,width=800}: Props) => {
  const color = d3.scaleOrdinal(
    d3.quantize(d3.interpolateRainbow, (data.children?.length || 0) + 1)
  );
  const radius = width / 2;

  const arc = d3
    .arc<Node>()
    .startAngle((d) => d.x0)
    .endAngle((d) => d.x1)
    .padAngle((d) => Math.min((d.x1 - d.x0) / 2, 0.005))
    .padRadius(radius / 4)
    .innerRadius((d) => d.y0)
    .outerRadius((d) => d.y1 - 1);




  const root = useMemo(
    () =>
      d3.partition<Data>().size([2 * Math.PI, radius])(
        d3
        .hierarchy(data )
        .sum((d) => d.value || 0)
        .sort((a, b) => (b.value || 0 )-( a.value || 0)) 
      ),
    [data, radius]
  );


  // Generate paths and labels
  const paths = root
    .descendants()
    .filter((d) => d.depth)
    .map((d, i) => {
      let parent = d;
      while ( parent.depth > 1) parent = parent.parent!;
      const fillColor = color(parent.data.name);
        
      return (
        <g key={i}>
          <path d={arc(d) || ''} fill={fillColor} fillOpacity={0.6}>
            <title>
              {`${d
                .ancestors()
                .map((d) => d.data.name)
                .reverse()
                .join("/")}\n${d3.format(",d")(d.value || 0)}`}
            </title>
          </path>
        </g>
      );
    });

  const labels = root
    .descendants()
    .filter((d) => d.depth && ((d.y0 + d.y1) / 2) * (d.x1 - d.x0) > 10)
    .map((d, i) => {
      const x = (((d.x0 + d.x1) / 2) * 180) / Math.PI;
      const y = (d.y0 + d.y1) / 2;
      const rotate = x < 180 ? 0 : 180;

      return (
        <text
          key={i}
          transform={`rotate(${x - 90}) translate(${y},0) rotate(${rotate})`}
          textAnchor="middle"
          fontSize={10}
          fontFamily="sans-serif"
          dy="0.35em"
          pointerEvents="none"
        >
          {d.data.name}
        </text>
      );
    });

  return (
    <svg
      viewBox={`-${radius} -${radius} ${radius * 2} ${radius * 2}`}
      style={{ width: `${width}px`, height: `${width}px` }}
    >
      {paths}
      {labels}
    </svg>
  );
};

export default SunburstChart;
