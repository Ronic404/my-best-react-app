import { FC } from 'react'

import { LoginForm } from '../LoginForm/LoginForm'
import { Modal } from 'shared/ui/Modal'

import { classNames } from 'shared/lib/classNames/classNames'

import styles from './LoginModal.module.scss'

interface ILoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal: FC<ILoginModalProps> = ({ className, isOpen, onClose }) => {
  return (
    <Modal
      className={classNames(styles.___, {}, [className])}
      lazy
      isOpen={isOpen}
      onClose={onClose}
    >
      <LoginForm />
    </Modal>
  )
}
