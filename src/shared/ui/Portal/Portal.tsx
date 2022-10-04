import { FC } from 'react'
import { createPortal } from 'react-dom'

interface IPortalProps {
  element?: HTMLElement
}

export const Portal: FC<IPortalProps> = ({
  children,
  element = document.body,
}) => {
  return createPortal(children, element)
}
