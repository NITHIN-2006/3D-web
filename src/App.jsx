import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Earth from "./components/Earth"
import Moon from "./components/Moon"
import Navbar from "./components/Navbar/Navbar"
import Welcome from "./components/Welcome"

export default function App() {
  return (
    <>
      {/* 3D Background */}
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0
        }}
        gl={{ alpha: true }}
        camera={{ position: [0, 0, 9], fov: 45 }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />

        <Earth />
        <Moon />

        <OrbitControls target={[0, 0, 0]} />
      </Canvas>

      {/* UI Layer */}
      <div style={{ position: "relative", zIndex: 10 }}>
        <Navbar />
        <Welcome />
      </div>
    </>
  )
}
