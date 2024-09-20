import { FC, ReactNode } from "react"

interface IDescriptionProps {
  title?: string
  children: ReactNode
}
export const Description: FC<IDescriptionProps> = ({ children, title }) => {
  return (
    <div>
      {title && <h1 className="text-xl">{title}</h1>}
      <div>
        {children}
      </div>
    </div>
  )
}