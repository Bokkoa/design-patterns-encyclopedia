import { useContext, useEffect, useState } from 'react';
import { Patterns, state } from '../store/patterns';
import '../styles/overlay.css';
import { AnimatePresence, motion } from 'framer-motion';
import { ScrollContext, ScrollContextType } from '../utils/ScrollContext';

export const Overlay = () => {
  const { scrollRef } = useContext(ScrollContext) as ScrollContextType;
  const [search, setSearch] = useState('')
  const [active, setActive] = useState(false)
  const [animationCount, setAnimationCount] = useState(0)


  useEffect(() => {
    console.log('@@@@@@@@')

  }, [scrollRef?.offset]);

  useEffect(() => {
    const cardIndex = Patterns.findIndex(pattern => pattern.name.toUpperCase() === search.toUpperCase());

    if (cardIndex != -1) {
      state.searchCriteria = search
      state.searchIndex = cardIndex
      setActive(true)
      setAnimationCount(prevKey => prevKey + 1);
    } else {
      state.searchCriteria = ''
      state.searchIndex = 0
    }

  }, [search])

  const onInputChange = ({ target }: any) => {
    setSearch(target.value)
  }
  return (
    <>
      <AnimatePresence>
        {active && <InitialTransition key={animationCount} setActive={setActive} />}
      </AnimatePresence>
      <section className="fixed right-0 bottom-0 flex justify-end min-w-60 mr-20 mb-14 pointer-events-none">
        <div className="container">
          <h1 className='text-2xl font-bold p-4' style={{ color: '#ff63d2' }}>Search for a pattern</h1>
          {/* <input
            type='text'
            className='search glass p-2 w-full text-xl'
            onChange={onInputChange}
            value={search}
          /> */}
          <select 
            onChange={onInputChange}
            className='search glass p-2 w-full text-xl'>
            {Patterns.map(p => 
              (
                <option className='glass text-slate-700'>{p.name}</option>
              )
            )}
          </select>
        </div>
      </section>
    </>
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