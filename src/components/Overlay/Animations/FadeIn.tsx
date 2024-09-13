import { AnimatePresence, motion } from "framer-motion"
import { FC, ReactNode } from "react"

interface IProps {
  children: ReactNode
}


export const FadeIn: FC<IProps> = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: .8 } }}
        exit={{ opacity: 0, transition: { duration: .8 } }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
