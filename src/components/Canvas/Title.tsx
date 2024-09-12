import { Flex } from "@react-three/flex"
import { Text } from "./Text"
import { useMemo } from "react"
import { useControls } from "leva"

export const Title = () => {

  const textConfig = useMemo(() => {
    return {
      color: { value: '#000000' }
    }
  }, [])

  const textCtrls = useControls('Text', textConfig);

  return (
    <group>
      <Flex>
        <Text position={[-5, 16, 1]} fontSize={5} lineHeight={1} letterSpacing={0}>
          {"The Patterns"}
          <meshPhysicalMaterial
            color={textCtrls.color}
          />
        </Text>

        <Text position={[-5, 11, 1]} fontSize={5} lineHeight={1} letterSpacing={0}>
          {"Collection"}
          <meshPhysicalMaterial
            color="#ff63d2"
          />
        </Text>
      </Flex>
    </group>
  )
}
