// src/components/Hero3D.jsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function RotatingCube() {
  return (
    <mesh rotation={[0.4, 0.2, 0]}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial color={"#6a5acd"} metalness={0.6} roughness={0.3} />
    </mesh>
  );
}

export default function Hero3D() {
  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        background: "rgba(0,0,0,0.3)",
        borderRadius: "12px",
      }}
    >
      <Canvas>
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 4, 4]} intensity={1} />
        <Suspense fallback={null}>
          <RotatingCube />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}