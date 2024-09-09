import { Leva } from 'leva'
import './App.css'
import { Canvas } from './components/Canvas'
import { Overlay } from './components/Overlay'
import { Modal } from './components/Modal/Modal'

function App() {

  return (
    <>
      {/* <Leva collapsed={false} /> */}
      <Canvas />
      <Overlay />
      {/* <Modal>

        <Modal.Header title='Factory Pattern' >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam quae ratione modi soluta iure repellat doloribus repudiandae necessitatibus obcaecati, illum, quis corrupti cumque tenetur sequi unde pariatur, odio officia?</p>
        </Modal.Header>

        <Modal.Code description='Cuerpo'>
          {`
            const a = 100;
            const b = a + 100;
            console.log(b + a);
            `}
        </Modal.Code>

        <Modal.Code description='Cuerpo'>
          {`
            const a = 100;
            const b = a + 100;
            console.log(b + a);
            `}
        </Modal.Code>

        <Modal.Code description='Cuerpo'>
          {`
            const a = 100;
            const b = a + 100;
            console.log(b + a);
            `}
        </Modal.Code>

        <Modal.Code description='Cuerpo'>
          {`
            const a = 100;
            const b = a + 100;
            console.log(b + a);
            `}
        </Modal.Code>

        <Modal.Code description='Cuerpo'>
          {`
            const a = 100;
            const b = a + 100;
            console.log(b + a);
            `}
        </Modal.Code>

        <Modal.Code description='Cuerpo'>
          {`
const a = 100;
const b = a + 00;
console.log(b + a);
          `}
        </Modal.Code>

        <Modal.Code description='Cuerpo'>
          {`
const a = 100;
const b = a + 10;
console.log(b + a);
          `}
        </Modal.Code>

      </Modal> */}
    </>
  )
}

export default App
