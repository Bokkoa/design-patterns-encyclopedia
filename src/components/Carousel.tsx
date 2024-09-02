import { useScroll } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"
import { Card } from "./Card"
import { Patterns, state } from "../store/patterns"
import { useSnapshot } from "valtio"

export function Rig(props: any) {
  
  const snap = useSnapshot(state)

  const ref = useRef<any>()
  const scroll = useScroll()
  const [rotation, setRotation] = useState(0); 

    const rotateToCard = (cardText: string) => {
      const cardIndex = Patterns.findIndex(pattern => pattern.name.toUpperCase() === cardText.toUpperCase());
      console.log(cardIndex)
      if (cardIndex !== -1) {
        const count = Patterns.length;
        const targetAngle = (cardIndex / count) * Math.PI * 2;
        setRotation(-targetAngle);
        const targetOffset = cardIndex / count; // Calculate the target scroll offset as a fraction
        scroll.offset = targetOffset;
      }
    };
  
    useEffect(() => {
      rotateToCard(snap.searchCriteria); // Replace "Singleton" with the desired card text
    }, [snap.searchCriteria]);

  useFrame((state: any, delta) => {
    ref.current.rotation.z = -scroll.offset * (Math.PI * 2) + rotation // Rotate contents
    state.events.update() 
  })

  return <group 
    position={[-43, 0, 20]}
    ref={ref}
    {...props} 
   
  />
}

export function Carousel() {

  const count = Patterns.length;

  const CARD_GAP = 5
  let cardWidth = 4;
  const radius = (cardWidth + CARD_GAP) / (2 * Math.sin(Math.PI / count));
  if (count > 12) {
    cardWidth = (Math.PI * radius * 2) / count - CARD_GAP
  }

  return <Rig >
    {Patterns.map(( pattern, i) => {
      const angle = (i  / count) * Math.PI * 2;
      return (
        <Card
          key={i}
          id={i}
          position={[Math.sin(angle) * radius, Math.cos(angle) * radius, 4]}
          rotation={[0, 0, -angle + 1.39]}
          family={`${pattern.family}`}
          name={`Pattern - ${pattern.name}`}
          width={cardWidth}
        />
      )
    })}
  </Rig>
}