import { Environment, Html, OrbitControls, ScrollControls, Shadow, useScroll } from '@react-three/drei'
import { Canvas as FiberCanvas, useFrame } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { Bloom, EffectComposer, SelectiveBloom } from '@react-three/postprocessing'
import { Box, Flex } from '@react-three/flex'
import { Ocean } from './Ocean'
import { Text } from './Text'
import { MarbleBust } from './MarbleBust'
import { Carousel } from './Carousel'
import { Patterns } from '../store/patterns'



export const Canvas = () => {

  function WaveAnimation() {
    useFrame((state) => {
      const elapsedTime = state.clock.getElapsedTime(); // Get the elapsed time from the clock

      // Sine wave parameters
      const amplitude = 0.1; // Adjust the amplitude (height) of the wave
      const frequency = 2; // Adjust the frequency (speed) of the wave

      // Update camera position using a sine function for wave motion
      state.camera.position.y = 5 + Math.sin(elapsedTime * frequency) * amplitude; // Apply sine wave to y position
      state.camera.position.x = Math.sin(elapsedTime * frequency) * amplitude; // Apply sine wave to x position for diagonal motion
      state.camera.lookAt(0, 0, 0)
    });

    return <></>;
  }

  return (
    <FiberCanvas
    shadows
    camera={{ position: [0, 9, 45], fov: 45, near: 1, far: 20000 }} >

    {/* SKY BG */}
    <Environment files="./backgrounds/bg2.hdr" background blur={0.5} />
    
    {/* Define the fog here on the Canvas */}
    <fog attach="fog" args={['#a3a2a2', -100, 1200]} />

     <Suspense>
      <Ocean />
    </Suspense>
    

    <group>
      <Flex>
        <Text position={[-5, 15, 1]} fontSize={5} lineHeight={1} letterSpacing={0}>
          {"The Patterns"}
          <meshPhysicalMaterial
            color="#ff63d2"
          />
        </Text>

        <Text position={[-5, 10, 1]} fontSize={7} lineHeight={1} letterSpacing={0}>
          {"Collection"}
          <meshPhysicalMaterial
            color="#ff63d2"
          />
        </Text>
      </Flex>
    </group>


    {/* <WaveAnimation /> */}

    {/* <OrbitControls /> */}
    {/* <axesHelper args={[15]} />
    <gridHelper /> */}

    <EffectComposer>
      <Bloom
        luminanceThreshold={.5}  // Adjusts the threshold for which parts will glow
        luminanceSmoothing={.9}   // Smoothing factor for the glow effect
        intensity={.1}
      />
    </EffectComposer>

    <MarbleBust />

    <ScrollControls pages={Patterns.length /  4}>
        <Carousel />
    </ScrollControls>

  </FiberCanvas>
  )
}
