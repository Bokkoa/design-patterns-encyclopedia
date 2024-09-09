import { ReactNode } from "react"

import { Code } from "./ModalCode";
import { Header } from "./ModalHeader";

interface IModalProps {
  children: ReactNode
  visible: boolean
  onClose: () => void
}

const Modal = ({ children, onClose }: IModalProps) => {
  return (
    <div className={`
      glass-dark 
      overflow-y-auto 
      fixed 
      z-50 
      w-full md:inset-0  
      max-h-full`
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
        <button onClick={onClose} >Back</button>
        {children}
      </div>
    </div>

  )
}


Modal.Code = Code
Modal.Header = Header

export { Modal }
