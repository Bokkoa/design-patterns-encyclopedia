import { Environment,  OrbitControls, ScrollControls, Shadow, useScroll } from '@react-three/drei'
import { Canvas as FiberCanvas, useFrame } from '@react-three/fiber'
import { Suspense, useMemo, useRef } from 'react'
import { Bloom, EffectComposer, SelectiveBloom } from '@react-three/postprocessing'
import { Ocean } from './Ocean'
import { Carousel } from './Carousel'
import { Rock } from './Models/Rock'
import { CatStatue } from './Models/CatStatue'
import { useControls } from 'leva'
import { Title } from './Title'



export const Canvas = () => {

  function WaveAnimation() {
    useFrame((state) => {
      const elapsedTime = state.clock.getElapsedTime();

      // Sine wave parameters
      const amplitude = 0.3; // Adjust the amplitude (height) of the wave
      const frequency = 1.5; // Adjust the frequency (speed) of the wave

      state.camera.position.y = 5 + Math.sin(elapsedTime * frequency) * amplitude;
      state.camera.position.x = Math.sin(elapsedTime * frequency) * amplitude;
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


    {/* <TitleCard position={[8, 11, 0]} /> */}


    <WaveAnimation />

    {/* <OrbitControls /> */}
    {/* <axesHelper args={[15]} />
    <gridHelper /> */}

    <EffectComposer>
      <Bloom
        luminanceThreshold={1}  
        luminanceSmoothing={.9}  
        intensity={.1}
      />
    </EffectComposer>

    <Title />

    {/* <MarbleBust /> */}
    <Rock />
    <CatStatue />

    <ScrollControls pages={2}>
        <Carousel />
    </ScrollControls>

  </FiberCanvas>
  )
}
