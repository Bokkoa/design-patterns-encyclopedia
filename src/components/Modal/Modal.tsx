import { ReactNode } from "react"

import { Code } from "./ModalCode";
import { Header } from "./ModalHeader";
import { AnimatePresence, motion } from "framer-motion";

interface IModalProps {
  children: ReactNode
  onClose: () => void
}

const Modal = ({ children, onClose }: IModalProps) => {

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: .8 } }}
        exit={{ opacity: 0, transition: { duration: .8 } }}
      >
        <div className={`
      glass-dark 
      overflow-y-auto 
      fixed 
      z-50 
      w-full md:inset-0  
      max-h-full
      `
        }>
          <div
            className={`
        m-auto
        p-4
        mt-24
        mb-24
        max-w-6xl 
        max-h-4xl 
        glass-dark
        text-white
        `}
          >
            <button onClick={onClose}>Back</button>
            {children}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}


Modal.Code = Code
Modal.Header = Header

export { Modal }
