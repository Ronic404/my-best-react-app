import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { Text } from '@/shared/ui/Text'
import { HStack } from '@/shared/ui/Stack'
import { Button } from '@/shared/ui/Button'
import { AppLink } from '@/shared/ui/AppLink'

import { AvatarDropdown } from '@/features/avatarDropdown'
import { NotificationButton } from '@/features/notificationButton'

import { LoginModal } from '@/features/AuthByUsername'
import { classNames } from '@/shared/lib/classNames/classNames'
import { getUserAuthData } from '../../../entities/User'

import { getRouteArticleCreate } from '@/shared/constants/router'

import styles from './Navbar.module.scss'

interface INavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: INavbarProps) => {
  const { t } = useTranslation()
  const authData = useSelector(getUserAuthData)
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false)

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  if (authData) {
    return (
      <header className={classNames(styles.navbar, {}, [className])}>
        <Text
          className={styles.appName}
          title={t('myApp')}
          theme='inverted'
        />

        <AppLink
          className={styles.createBtn}
          to={getRouteArticleCreate()}
          theme='secondary'
        >
          {t('createArticle')}
        </AppLink>

        <HStack className={styles.actions} gap='16'>
          <NotificationButton />
          <AvatarDropdown />
        </HStack>
      </header>
    )
  }

  return (
    <header className={classNames(styles.navbar, {}, [className])}>
      <Button
        className={classNames(styles.button)}
        theme='clearInverted'
        onClick={onShowModal}
      >
        {t('logIn')}
      </Button>
      {isAuthModal &&
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      }
    </header>
  )
})
