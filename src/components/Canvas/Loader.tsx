import { Html, useProgress } from "@react-three/drei";
import { useEffect } from "react";
import { state } from "../../store/store";

export const Loader = () => {
  const { progress } = useProgress();

  useEffect(() => {
    if(progress >= 100){
      state.sceneLoaded = true
    }
  }, [progress])
  
  return (
    <group>
      <mesh position={[0, 0, -100]}>
        <planeGeometry args={[500, 500]} />
        <meshBasicMaterial color="black" />
      </mesh>
      <Html>
        <div
          className="bg-black-50 fixed h-screen w-screen text-white"
        >
          {progress.toFixed(2)}% ...Loading
        </div>
      </Html>
    </group>
  )
}
