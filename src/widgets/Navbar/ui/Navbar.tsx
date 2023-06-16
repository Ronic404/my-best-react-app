import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { Text } from '@/shared/ui/deprecated/Text'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { Button } from '@/shared/ui/redesigned/Button'
import { AppLink } from '@/shared/ui/deprecated/AppLink'
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button'

import { AvatarDropdown } from '@/features/avatarDropdown'
import { NotificationButton } from '@/features/notificationButton'
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features'

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

  const mainClass = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => styles.navbarRedesigned,
    off: () => styles.navbar,
  })

  if (authData) {
    return (
      <ToggleFeatures
        feature='isAppRedesigned'
        on={
          <header className={classNames(mainClass, {}, [className])}>
            <HStack className={styles.actions} gap='16'>
              <NotificationButton />
              <AvatarDropdown />
            </HStack>
          </header>
        }
        off={
          <header className={classNames(mainClass, {}, [className])}>
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
        }
      />
    )
  }

  return (
    <header className={classNames(mainClass, {}, [className])}>
      <ToggleFeatures
        feature='isAppRedesigned'
        on={
          <Button
            className={classNames(styles.button)}
            variant='clear'
            onClick={onShowModal}
          >
            {t('logIn')}
          </Button>
        }
        off={
          <ButtonDeprecated
            className={classNames(styles.button)}
            theme='clearInverted'
            onClick={onShowModal}
          >
            {t('logIn')}
          </ButtonDeprecated>
        }
      />
      {isAuthModal &&
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      }
    </header>
  )
})
