import { useRef } from "react"
import { useFrame, useLoader } from "@react-three/fiber"
import * as THREE from "three"

export default function Earth() {
  const earthRef = useRef()

  const earthTexture = useLoader(
    THREE.TextureLoader,
    "/textures/2k_earth_daymap.jpg"
  )

  useFrame(() => {
    earthRef.current.rotation.y += 0.0015
  })

  return (
    <mesh ref={earthRef} position={[0, 0, 0]}>
      <sphereGeometry args={[3, 64, 64]} />
      <meshStandardMaterial map={earthTexture} />
    </mesh>
  )
}
