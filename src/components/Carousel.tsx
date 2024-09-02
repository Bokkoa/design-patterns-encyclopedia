import { useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Card } from "./Card"
import { Patterns } from "../store/patterns"

export function Rig(props: any) {
  const ref = useRef<any>()
  const scroll = useScroll()
  useFrame((state: any, delta) => {
    ref.current.rotation.z = -scroll.offset * (Math.PI * 2) // Rotate contents
    state.events.update() // Raycasts every frame rather than on pointer-move
  })
  return <group position={[-43, 0, 20]} ref={ref} {...props} />
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
      const angle = (i / count) * Math.PI * 2;
      return (
        <Card
          url="https://placehold.co/600x400"
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