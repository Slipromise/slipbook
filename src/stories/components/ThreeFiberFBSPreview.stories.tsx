import { Canvas } from "@react-three/fiber";
import type { Meta, StoryObj } from "@storybook/react";
import { OrbitControls, useFBX, useAnimations } from "@react-three/drei";
import { Suspense, useEffect } from "react";

type Props = {
  fbxUrl: string;
  animationIndex?: number;
};

function FBXModel({ fbxUrl, animationIndex }: Props) {
  const fbx = useFBX(fbxUrl);

  const { actions, names } = useAnimations(fbx.animations, fbx);

  useEffect(() => {
    if (animationIndex !== undefined) {
      actions[names[animationIndex]]?.reset().fadeIn(0.5).play();
    }
  }, [actions, animationIndex, names]);

  return <primitive object={fbx} scale={0.025} position={[0, -2, 0]} />;
}

const meta: Meta<typeof FBXModel> = {
  component: FBXModel,
  parameters: {
    layout: "centered",
  },
  render: function Render(args) {
    return (
      <div>
        <Canvas style={{ width: "95vw", height: "95vh" }}>
          <Suspense fallback={null}>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              decay={0}
              intensity={Math.PI}
            />
            <pointLight
              position={[-10, -10, -10]}
              decay={0}
              intensity={Math.PI}
            />
            <OrbitControls />
            <FBXModel {...args} />
          </Suspense>
        </Canvas>
        <span style={{ position: "absolute", left: "1rem", bottom: "1rem" }}>
          <a href="https://skfb.ly/pvoQM" target="_blank">
            "Mutant-Right-Turn-45-Monster-Model"
          </a>
          by aliyananimagic is licensed under
          <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank">
            Creative Commons Attribution
          </a>
          .
        </span>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof FBXModel>;

export const Normal: Story = {
  args: {
    fbxUrl:
      "/mutant-right-turn-45-monster-model/source/Mutant Right Turn 45.fbx",
    animationIndex: 0,
  },
};
