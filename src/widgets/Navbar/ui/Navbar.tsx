import { FC, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Modal } from 'shared/ui/Modal'
import { Button } from 'shared/ui/Button'
import { classNames } from 'shared/lib/classNames/classNames'

import styles from './Navbar.module.scss'

interface INavbarProps {
  className?: string
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
  const { t } = useTranslation()

  const [isAuthModal, setIsAuthModal] = useState<boolean>(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev)
  }, [])

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <Button
        className={classNames(styles.button)}
        theme='clearInverted'
        onClick={onToggleModal}
      >
        {t('logIn')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Modal>
    </div>
  )
}
