import { useRef } from "react"
import { useFrame, useLoader } from "@react-three/fiber"
import * as THREE from "three"

export default function Moon() {
  const moonRef = useRef()

  const moonTexture = useLoader(
    THREE.TextureLoader,
    "/textures/2k_moon.jpg"
  )

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.2   // slower orbit
    moonRef.current.position.x = Math.cos(t) * 6
    moonRef.current.position.z = Math.sin(t) * 6
  })

  return (
    <mesh ref={moonRef}>
      <sphereGeometry args={[0.8, 48, 48]} />
      <meshStandardMaterial map={moonTexture} />
    </mesh>
  )
}
