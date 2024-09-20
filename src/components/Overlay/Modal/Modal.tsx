import { ReactNode } from "react"
import { Code } from "./ModalCode";
import { Description } from "./ModalDescription";
import { FadeIn } from "../Animations/FadeIn";

interface IModalProps {
  children: ReactNode
  onClose: () => void
}

const Modal = ({ children, onClose }: IModalProps) => {

  return (
    <FadeIn>
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

    </FadeIn>
  )
}


Modal.Code = Code
Modal.Description = Description

export { Modal }
