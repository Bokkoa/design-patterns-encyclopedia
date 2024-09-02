
import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { extend, useFrame, useLoader } from '@react-three/fiber'
import { Water } from 'three-stdlib'

extend({ Water })

export const Ocean = () => {
  const ref = useRef<any>()

  const waterNormals = useLoader(THREE.TextureLoader, '/waters1.jpeg');

  // Check if the texture has been loaded correctly
  if (!waterNormals) {
    console.error('Failed to load waterNormals texture');
    return null;
  }
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;

  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), [])
  const config = useMemo(
    () => ({
      textureWidth: 1000,
      textureHeight: 1000,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x376094,
      // waterColor: 0x376094,
      distortionScale: 3.7,
      fog: true,
    }),
    [waterNormals]
  )

  useFrame((state, delta) => {
    const material = ref?.current?.material as THREE.ShaderMaterial;
    // ocean waves speed
    material.uniforms.time.value += delta - .0070;
  })

  return (
    <>
      {/* <fog attach="fog" color="hotpink" near={4} far={10} /> */}
      <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
    </>
  )
}
