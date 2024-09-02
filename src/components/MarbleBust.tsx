import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

export const MarbleBust = () => {

  const gltf = useLoader(GLTFLoader as any, '/models/marble_bust.gltf')
  return (
      <primitive
        object={gltf.scene}
        position={[24, 3, 2]}
        scale={18}
        rotation-y={-.5}
      />
  )
}
