import { FC, ReactNode } from "react"

interface IDescriptionProps {
  title: string
  children: ReactNode
}
export const Header: FC<IDescriptionProps> = ({ children, title }) => {
  return (
    <div>
      <h1 className="text-xl">{title}</h1>
      <div>
        {children}
      </div>
    </div>
  )
}