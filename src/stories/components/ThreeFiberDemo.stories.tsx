import { Mesh } from "three";
import { useRef, useState } from "react";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import type { Meta, StoryObj } from "@storybook/react";

function BoxMesh(props: ThreeElements["mesh"]) {
  const ref = useRef<Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useFrame((_, delta) => (ref.current.rotation.x += delta));
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

const meta: Meta<typeof BoxMesh> = {
  component: BoxMesh,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof BoxMesh>;

export const Normal: Story = {
  args: {
    position: [0, 0, 0],
  },
  render: function Render(args) {
    return (
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <BoxMesh {...args} />
      </Canvas>
    );
  },
};
