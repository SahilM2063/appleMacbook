/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useGLTF, useScroll, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

const MacContainer = () => {
  let model = useGLTF("./mac.glb");
  let tex = useTexture("./red.jpg");
  let mashes = {};
  model.scene.traverse((e) => {
    mashes[e.name] = e;
  });
  console.log(mashes);
  mashes.screen.rotation.x = THREE.MathUtils.degToRad(180);
  mashes.matte.material.map = tex;
  mashes.matte.material.emissiveIntensity = 0;
  mashes.matte.material.metalness = 0;
  mashes.matte.material.roughness = 0;

  let data = useScroll();

  useFrame((state, delta) => {
    mashes.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90);
  });

  return (
    <group position={[0, -10, 20]}>
      <primitive object={model.scene} />;
    </group>
  );
};

export default MacContainer;
