import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
// import * as THREE from "three";

export default function Model() {
  const group = useRef();
  const { scene, animations } = useGLTF("/spaceship.glb", true);
  const { actions } = useAnimations(animations, group);
  const action: any = useRef();
  action.current = actions["Armature.002|Armature.002Action"];
  useFrame(({ camera }) => {
    camera.updateMatrixWorld();
  });

  if (action.current) action.current.play();

  return (
    <primitive
      ref={group}
      object={scene}
      dispose={null}
      rotation-z={0.1}
      rotation-y={-8.2}
      rotation-x={0.3}
    />
  );
}

useGLTF.preload("/spaceship.glb");
