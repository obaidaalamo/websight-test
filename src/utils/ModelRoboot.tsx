import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model from "./ModelObjectRobot";

export const Model3D = () => {
  return (
    <Canvas
      camera={{ position: [5, 9, 15.25], fov: 15 }}
      style={{
        backgroundColor: "transparent",
      }}
    >
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <Suspense fallback={"looding"}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};
