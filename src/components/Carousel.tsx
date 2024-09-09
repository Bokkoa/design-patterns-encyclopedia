import { useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useContext, useEffect, useRef, useState } from "react"
import { Card } from "./Card"
import { Patterns, state } from "../store/patterns"
import { useSnapshot } from "valtio"
import { ScrollContext, ScrollContextType } from '../utils/ScrollContext';

// Position where start the first pattern
const INITIAL_RADIUS_POINT_ANGLE = 1.40;

export function Rig(props: any) {
  const { setScrollRef } = useContext(ScrollContext) as ScrollContextType;
  const snap = useSnapshot(state)

  const ref = useRef<any>()
  const scroll = useScroll()
  const targetOffsetRef = useRef(scroll.offset);
  const [scrollOffset, setScrollOffset] = useState(scroll.offset); // State to track scroll offset changes
  const [dataFound, setDataFound] = useState(false)

  const rotateToCard = (cardText: string) => {

    if (cardText) {
      setDataFound(true);
      const count = Patterns.length;
      const targetOffset = snap.searchIndex / count; 
      targetOffsetRef.current = targetOffset
    } else {
      setDataFound(false)
    }

  };

  useEffect(() => {
    setScrollRef(scroll)
    // console.log('@@@@@@@')
  }, [targetOffsetRef.current])
  

  useEffect(() => {
    rotateToCard(snap.searchCriteria);
  }, [snap.searchCriteria]);

  useFrame((state: any, delta) => {

    if(dataFound){
      scroll.offset += (targetOffsetRef.current - scroll.offset)
    } else if (targetOffsetRef.current !== scroll.offset) {
      // Detect change in scroll.offset
      setScrollOffset(scroll.offset);
      // console.log("Scroll offset changed:", scroll.offset);
      targetOffsetRef.current = scroll.offset;
    }
    ref.current.rotation.z = -scroll.offset * (Math.PI * 2);
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

  return <Rig >
    {Patterns.map((pattern, i) => {
      const angle = - (i / count) * Math.PI * 2 + INITIAL_RADIUS_POINT_ANGLE;

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