

import { Text  as TextImpl } from '@react-three/drei'
import { useReflow } from '@react-three/flex'

export const Text = ({ bold = false, anchorX = 'left', anchorY = 'top', textAlign = 'left', children, ...props }: any) => {
  const reflow = useReflow()
  const font = bold ? '/fonts/archivo/ArchivoBlack-Regular.ttf' : '/fonts/archivo/ArchivoBlack-Regular.ttf'
  return (
    <TextImpl anchorX={anchorX} anchorY={anchorY} textAlign={textAlign}  font={font} onSync={reflow} {...props} >
      {children}
    </TextImpl>
  )
}
