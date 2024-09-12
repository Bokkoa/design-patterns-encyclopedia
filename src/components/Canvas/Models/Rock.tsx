import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

export const Rock = () => {

  const gltf = useLoader(GLTFLoader as any, '/models/rock/rock_09_4k.gltf')
  return (
      <primitive
        object={gltf.scene}
        position={[20, -2.7, 2]}
        scale={200}
        rotation-y={2}
      />
  )
}
