"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useTheme } from "next-themes";
import type { Group, Mesh } from "three";
import { HeroBlobsFallback } from "./hero-blobs-fallback";

type BlobConfig = {
  position: [number, number, number];
  scale: number;
  color: string;
  speed: number;
  distort: number;
  seed: number;
};

function Blob({ position, scale, color, speed, distort, seed }: BlobConfig) {
  const ref = useRef<Mesh>(null!);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.position.x = position[0] + Math.sin(t * 0.4 + seed) * 0.35;
    ref.current.position.y = position[1] + Math.cos(t * 0.3 + seed) * 0.35;
    ref.current.rotation.x = t * 0.05;
    ref.current.rotation.y = t * 0.08;
  });
  return (
    <Sphere ref={ref} args={[1, 64, 64]} position={position} scale={scale}>
      <MeshDistortMaterial
        color={color}
        distort={distort}
        speed={speed}
        roughness={0.25}
        metalness={0.15}
        transparent
        opacity={0.95}
      />
    </Sphere>
  );
}

function Scene({ colors }: { colors: [string, string, string] }) {
  const group = useRef<Group>(null!);
  // Spread blobs far apart so each hue reads as its own shape, not a wash.
  const blobs = useMemo<BlobConfig[]>(
    () => [
      { position: [-3.2, 1.4, 0], scale: 1.7, color: colors[0], speed: 1.4, distort: 0.5, seed: 1.1 },
      { position: [3.0, -0.4, -0.5], scale: 1.9, color: colors[1], speed: 1.1, distort: 0.55, seed: 3.3 },
      { position: [0.4, -2.3, 0.4], scale: 1.3, color: colors[2], speed: 1.6, distort: 0.45, seed: 5.7 },
    ],
    [colors],
  );

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.1) * 0.1;
  });

  return (
    <group ref={group}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.3} />
      <directionalLight position={[-5, -3, -2]} intensity={0.7} color={colors[1]} />
      {blobs.map((b, i) => (
        <Blob key={i} {...b} />
      ))}
    </group>
  );
}

export function HeroBlobsScene() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  // Distinct hue triad per theme — see `--blob-1/2/3` in globals.css for the CSS fallback.
  const colors: [string, string, string] = isDark
    ? ["#F0B6CF", "#BFA8E8", "#F5F0FA"] // pink / lilac / cream (original)
    : ["#EF7FA3", "#F2B544", "#B56A4A"]; // rose / honey / terracotta

  return (
    <div aria-hidden className="absolute inset-0">
      <Suspense fallback={<HeroBlobsFallback />}>
        <Canvas
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
          camera={{ position: [0, 0, 6], fov: 50 }}
        >
          <Scene colors={colors} />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default HeroBlobsScene;
