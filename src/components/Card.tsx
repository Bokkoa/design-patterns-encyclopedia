import { extend, useFrame } from "@react-three/fiber"
import { easing, geometry } from "maath"
import { useMemo, useRef, useState } from "react"
import { Image, MeshPortalMaterial, MeshTransmissionMaterial, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'
import { Text } from "./Text"
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing"
import { useControls } from "leva"

extend(geometry);

const CARD_SCALE = 2
const CARD_HOVERED_SCALE = 2.5

export function Card({ index, position, scale = [1, 1, 1], name, id, family, width = 1, height = 1.3, ...props }: any) {
 
  const boxRef = useRef<any>()
  const materialRef = useRef<any>();
  const colorRef = useRef(new THREE.Color('#caebff')) // Ref to store the current color
  const [hovered, setHovered] = useState(false)

  const pointerOver = (e: any) => (e.stopPropagation(), setHovered(true))
  const pointerOut = () => setHovered(false)
  const click = (e: any) => (e.stopPropagation())

  const cardProps = useMemo( () => {
    return {
    backside: false,
    samples: { value: 16, min: 1, max: 32, step: 1 },
    resolution: { value: 256, min: 64, max: 2048, step: 64 },
    transmission: { value: 0.86, min: 0, max: 1 },
    roughness: { value: 0.08, min: 0, max: 1, step: 0.01 },
    clearcoat: { value: 0.1, min: 0, max: 1, step: 0.01 },
    clearcoatRoughness: { value: 0.1, min: 0, max: 1, step: 0.01 },
    thickness: { value: 14.9, min: 0, max: 200, step: 0.01 },
    backsideThickness: { value: 200, min: 0, max: 200, step: 0.01 },
    ior: { value: 1.5, min: 1, max: 5, step: 0.01 },
    chromaticAberration: { value: 0.11, min: 0, max: 1 },
    anisotropy: { value: 1, min: 0, max: 10, step: 0.01 },
    distortion: { value: 0, min: 0, max: 1, step: 0.01 },
    distortionScale: { value: 0.2, min: 0.01, max: 1, step: 0.01 },
    temporalDistortion: { value: 0, min: 0, max: 1, step: 0.01 },
    attenuationDistance: { value: 0.5, min: 0, max: 10, step: 0.01 },
    }
  }, [])
  const config = useControls('Card', cardProps)

  useFrame((state, delta) => {

    // Smooth scaling based on the hover state
    easing.damp3(
      boxRef.current.scale,
      hovered ? [CARD_HOVERED_SCALE, CARD_HOVERED_SCALE, 1] : [CARD_SCALE, CARD_SCALE, 1],
      0.02,
      delta
    );

    // Smooth color transition
    easing.dampC(
      colorRef.current,
      hovered ? new THREE.Color('#93b3c6') : new THREE.Color('#caebff'),
      0.05, 
      delta
    );

     if (materialRef.current) {
      materialRef.current.color.copy(colorRef.current);
    }
  })

  return (
    <group>
      <mesh
        ref={boxRef}
        position={position}
        scale={scale}
        onClick={click}
        onPointerOver={pointerOver}
        onPointerOut={pointerOut}
        {...props}
      >
        <Text fontSize={.3} material-toneMapped={false} position={[-1.4, 0.6, 0.9]}>
          {name}
          <meshPhysicalMaterial
            color="#ffffff"
          />
        </Text>
        <Text fontSize={0.4} anchorX="left" material-toneMapped={false} position={[-0.3, 0, 0.9]}>
        {family} /0{id}
          <meshPhysicalMaterial
            color="#ff63d2"
          />
        </Text>

        <RoundedBox 
          castShadow 
          radius={0.3}
          args={[width, 2, 0.8]} >
          
        <MeshTransmissionMaterial
          ref={materialRef}
          color={colorRef.current}
          {...config}
         />
         </RoundedBox>
      </mesh>
    </group>

  )
}
