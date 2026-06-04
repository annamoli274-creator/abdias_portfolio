import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { inSphere } from 'maath/random';

function StarBackground(props: any) {
  const ref = useRef<any>();
  
  // Use useMemo to generate the sphere once
  const sphere = useMemo(() => {
    // Generate 5000 points inside a sphere of radius 1.5
    const positions = inSphere(new Float32Array(5000 * 3), { radius: 1.5 });
    // Check for any NaN values and replace them
    for (let i = 0; i < positions.length; i++) {
      if (isNaN(positions[i])) positions[i] = 0;
    }
    return positions as Float32Array;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#6366f1"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

const Hero = () => {
  return (
    <section id="hero" className="h-screen w-full relative bg-dark">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <StarBackground />
        </Canvas>
      </div>
      
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-white drop-shadow-lg">
          ABDIAS AZIFAN
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide max-w-2xl drop-shadow-md">
          Développeur Full Stack Web & Mobile
        </p>
        <p className="mt-6 text-sm text-primary uppercase tracking-[0.3em]">
          React • Next.js • React Native • Node.js
        </p>
        
        <div className="absolute bottom-10 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
