import { Leva } from 'leva'
import './App.css'
import { Canvas } from './components/Canvas'
import { Overlay } from './components/Overlay'

function App() {



  return (
    <>
      <Leva collapsed={false} />
      <Canvas />
      <Overlay />
    </>
  )
}

export default App
