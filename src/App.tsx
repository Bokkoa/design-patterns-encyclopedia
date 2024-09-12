import { Leva } from 'leva'
import './App.css'
import { Canvas } from './components/Canvas/Canvas'
import { Overlay } from './components/Overlay/Overlay'
import { Modal } from './components/Modal/Modal'

function App() {

  return (
    <>
      {/* <Leva collapsed={false} /> */}
      <Canvas />
      <Overlay />
    
    </>
  )
}

export default App
