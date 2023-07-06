import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model from "./ModelObjectSpaceship";

export const ModelSpaceship = () => {
  return (
    <Canvas className="Ship" camera={{ position: [-30, 0, 150.25], fov: 15 }}>
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
