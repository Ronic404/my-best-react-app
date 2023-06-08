import { FC, Suspense } from 'react'

import { LoginForm } from '../LoginForm'
import { Modal } from '@/shared/ui/deprecated/Modal'
import { Loader } from '@/shared/ui/deprecated/Loader'

import { classNames } from '@/shared/lib/classNames/classNames'

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
      <Suspense fallback={<Loader />}>
        <LoginForm onSuccess={onClose} />
      </Suspense>
    </Modal>
  )
}
