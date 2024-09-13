import {  useEffect, useState } from 'react';
import { Patterns } from '../../store/patterns';
import './overlay.css';
import { AnimatePresence, motion } from 'framer-motion';
import { Selector } from './Selector/Selector';
import { useSnapshot } from 'valtio';
import { Modal } from './Modal/Modal';
import { state } from '../../store/store';
import { FadeIn } from './Animations/FadeIn';


export const Overlay = () => {

  const [search, setSearch] = useState('')
  const [active, setActive] = useState(false)
  const [animationCount, setAnimationCount] = useState(0)

  const snap = useSnapshot(state)

  useEffect(() => {

    const cardIndex = Patterns.findIndex(pattern => pattern.name.toUpperCase() === search?.toUpperCase());

    if (cardIndex != -1) {
      state.searchCriteria = search
      state.searchIndex = cardIndex
      // state.selectedPattern = cardIndex
      setActive(true)
      setAnimationCount(prevKey => prevKey + 1);
    } else {
      state.searchCriteria = ''
      state.searchIndex = 0
    }

  }, [search])

  const onInputChange = (patternSelected: string) => {
    setSearch(patternSelected);
  }

  return (
    <FadeIn>
      <section className="fixed right-0 bottom-0 flex justify-end min-w-60 mr-20 mb-14 pointer-events-none">
        <div className="container">
          <h1 className='text-2xl font-bold p-4' style={{ color: '#ff63d2' }}>Search for a pattern</h1>
          <Selector onChange={onInputChange} />
        </div>
      </section>

        {active && <InitialTransition key={animationCount} setActive={setActive} />}
          { 
              snap.selectedPattern != null &&
              snap.selectedPattern !== undefined &&
          <Modal
            
            onClose={() => {
              state.selectedPattern = null
              setSearch('')
            }}>
            <Modal.Header title={Patterns[snap.selectedPattern ?? 0].name} >
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam quae ratione modi soluta iure repellat doloribus repudiandae necessitatibus obcaecati, illum, quis corrupti cumque tenetur sequi unde pariatur, odio officia?</p>
              <p>!!</p>
              {snap.selectedPattern}
            </Modal.Header>

            <Modal.Code description='Cuerpo'>
              {`
const a = 100;
const b = a + 00;
console.log(b + a);
          `}
            </Modal.Code>

          </Modal>
          }
    </FadeIn>
  );
}


const blackBox = {
  hidden: {
    height: 0,
    display: 'none',
    bottom: 0,
  },
  initial: {
    height: "100vh",
    bottom: 0,
    display: 'block'
  },
  animate: {
    height: 0,
    display: 'none',
    transition: {
      duration: 1,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const InitialTransition = ({ setActive }: { setActive: (active: boolean) => void }) => {

  return (
    <div className="absolute anim-container inset-0 flex items-center justify-center">
      <motion.div
        className="relative z-50 w-full glass"
        initial={"initial"}
        animate={"animate"}
        exit={"hidden"}
        variants={blackBox}
        onAnimationComplete={() => {
          setActive(false)
        }}
      />
    </div>
  );
};
