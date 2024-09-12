import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

export const CatStatue = () => {

  const gltf = useLoader(GLTFLoader as any, '/models/cat/concrete_cat_statue_4k.gltf')
  return (
      <primitive
        object={gltf.scene}
        position={[24, 3, 2]}
        scale={18}
        rotation-y={-.5}
      />
  )
}
