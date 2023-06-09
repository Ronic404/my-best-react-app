import { FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface IPortalProps {
  children: ReactNode
  element?: HTMLElement
}

export const Portal: FC<IPortalProps> = ({
  children,
  element = document.body,
}) => {
  return createPortal(children, element)
}
