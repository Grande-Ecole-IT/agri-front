import { Float, OrbitControls, Sphere, Torus } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useMemo, useRef } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // Noyau AI agricole
  const AICore = () => {
    const group = useRef();
    const rings = useRef([]);

    useFrame((state) => {
      const t = state.clock.getElapsedTime();
      if (group.current) {
        group.current.rotation.y = t * 0.1;
      }
      rings.current.forEach((ring, i) => {
        ring.rotation.x = t * (0.05 + i * 0.02);
      });
    });

    return (
      <group ref={group}>
        <Sphere args={[1.2, 32, 32]}>
          <meshStandardMaterial
            color="#84cc16"
            emissive="#bef264"
            emissiveIntensity={1.5}
            metalness={0.9}
            roughness={0.1}
          />
        </Sphere>

        {[1.8, 2.6, 3.4].map((radius, i) => (
          <mesh
            key={i}
            ref={(el) => (rings.current[i] = el)}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <Torus args={[radius, 0.04, 16, 32]} />
            <meshStandardMaterial
              color="#bef264"
              emissive="#bef264"
              emissiveIntensity={0.5}
              transparent
              opacity={0.8}
            />
          </mesh>
        ))}

        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i / 6) * Math.PI * 2;
          return (
            <Float
              key={i}
              speed={2}
              floatIntensity={0.5}
              rotationIntensity={0.5}
            >
              <mesh
                position={[Math.cos(angle) * 3.5, Math.sin(angle) * 3.5, 0]}
              >
                <boxGeometry args={[0.4, 0.4, 0.4]} />
                <meshStandardMaterial
                  color="#ffffff"
                  emissive="#84cc16"
                  emissiveIntensity={0.8}
                  metalness={0.8}
                />
              </mesh>
            </Float>
          );
        })}
      </group>
    );
  };

  // Pluie de données
  const DataRain = () => {
    const columns = useMemo(
      () =>
        Array.from({ length: Math.floor(window.innerWidth / 40) }, () =>
          Array.from({ length: 8 }, () => ({
            char: Math.random() > 0.7 ? "🌱" : Math.random() > 0.5 ? "1" : "0",
            size: Math.random() * 16 + 10,
            speed: Math.random() * 15 + 10,
            opacity: Math.random() * 0.6 + 0.2,
          }))
        ),
      []
    );

    return (
      <div className="absolute inset-0 flex justify-between overflow-hidden opacity-30 pointer-events-none">
        {columns.map((col, i) => (
          <div key={i} className="relative h-full w-px">
            {col.map((item, j) => (
              <motion.div
                key={j}
                className="absolute text-lime-300 font-mono"
                style={{
                  left: 0,
                  top: `${-20 - Math.random() * 20}%`,
                  fontSize: `${item.size}px`,
                  opacity: item.opacity,
                }}
                animate={{
                  y: `150vh`,
                }}
                transition={{
                  duration: item.speed,
                  delay: Math.random() * 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {item.char}
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  // Feuilles flottantes
  const FloatingLeaves = () => {
    const leaves = useMemo(
      () =>
        Array.from({ length: 15 }, () => ({
          size: Math.random() * 24 + 12,
          x: Math.random() * 100,
          y: Math.random() * 100,
          duration: Math.random() * 20 + 10,
          delay: Math.random() * 5,
        })),
      []
    );

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {leaves.map((leaf, i) => (
          <motion.div
            key={i}
            className="absolute text-lime-300/40"
            style={{
              fontSize: `${leaf.size}px`,
              left: `${leaf.x}%`,
              top: `${leaf.y}%`,
            }}
            animate={{
              y: [0, Math.random() * 60 - 30],
              x: [0, Math.random() * 60 - 30],
              rotate: 360,
            }}
            transition={{
              duration: leaf.duration,
              delay: leaf.delay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            🍃
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <div className="relative h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#bef264"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <DataRain />
      <FloatingLeaves />

      {/* Light effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-lime-300/5 pointer-events-none"
        style={{ transform: "translate(-50%, -50%)" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 py-2 relative z-10">
        <header className="flex justify-between items-center py-4">
          <motion.h1
            className="text-3xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-lime-300">Ai</span>
            <span className="text-white">Gro</span>
          </motion.h1>

          <motion.div
            className="flex gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/login">
              <motion.button
                className="px-4 py-2 rounded-full text-sm font-medium border-2 border-white text-white bg-white/0 shadow-lg shadow-white/10"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 0 25px rgba(255, 255, 255, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Se Connecter
              </motion.button>
            </Link>
            <Link to="/register">
              <motion.button
                className="px-4 py-2 rounded-full text-sm font-medium bg-lime-300 border-2 border-lime-300 text-emerald-900 shadow-lg shadow-lime-300/20"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(190, 242, 100, 0.7)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                S'inscrire
              </motion.button>
            </Link>
          </motion.div>
        </header>

        <main className="flex flex-col lg:flex-row items-center justify-between pt-12 pb-16 gap-8">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              whileHover={{ x: 5 }}
            >
              <span className="text-lime-300">Agriculture</span>
              <br />
              <span className="text-white">Intelligente</span>
            </motion.h2>

            <motion.p
              className="text-white/80 mb-8 text-lg max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Solution complète d'agriculture intelligente utilisant l'IA pour
              optimiser vos rendements.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Link to="/discover">
                <motion.button
                  className="px-6 py-3 rounded-full font-medium bg-gradient-to-r from-lime-300 to-emerald-400 text-emerald-900 shadow-lg shadow-lime-300/30"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(190, 242, 100, 0.8)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explorer la Plateforme
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 h-64 md:h-80 lg:h-[35rem] relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Canvas
              camera={{ position: [0, 0, 8], fov: 50 }}
              gl={{ antialias: true }}
            >
              <ambientLight intensity={0.5} />
              <pointLight
                position={[10, 10, 10]}
                intensity={1.5}
                color="#bef264"
              />
              <pointLight
                position={[-10, -10, -10]}
                intensity={0.5}
                color="#ffffff"
              />

              <AICore />

              <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={0.8}
                enablePan={false}
              />
            </Canvas>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Home;
