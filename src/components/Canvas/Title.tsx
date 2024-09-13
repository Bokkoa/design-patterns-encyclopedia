import { Flex } from "@react-three/flex"
import { Text } from "./Text"

export const Title = () => {

  return (
    <group>
      <Flex>
        <Text position={[-5, 16, 1]} fontSize={5} lineHeight={1} letterSpacing={0}>
          {"The Patterns"}
          <meshPhysicalMaterial
            color={'#000000'}
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
