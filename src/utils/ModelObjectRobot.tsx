import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
// import * as THREE from "three";

export default function Model() {
  const group = useRef();
  const { scene, animations } = useGLTF("/robot.glb", true);

  const { actions } = useAnimations(animations, group);
  const action: any = useRef();
  action.current = actions["metarig|metarigAction"];

  useFrame(({ camera }) => {
    camera.updateMatrixWorld();
  });

  if (action.current) action.current.play();

  return (
    <primitive
      ref={group}
      object={scene}
      dispose={null}
      rotation-z={0.0}
      rotation-y={0.5}
      rotation-x={0.0}
    />
  );
}

useGLTF.preload("/robot.glb");
