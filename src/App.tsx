import { Leva } from 'leva'
import './App.css'
import { Canvas } from './components/Canvas/Canvas'
import { Overlay } from './components/Overlay/Overlay'
import { Modal } from './components/Overlay/Modal/Modal'
import { useSnapshot } from 'valtio'
import { state } from './store/store'

function App() {

  const snap = useSnapshot(state)

  return (
    <>
      {/* <Leva collapsed={false} /> */}
      <Canvas />
      {snap.sceneLoaded &&
        <Overlay />
      }

    </>
  )
}

export default App
