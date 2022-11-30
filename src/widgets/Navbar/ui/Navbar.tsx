import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import { Text } from 'shared/ui/Text'
import { Avatar } from 'shared/ui/Avatar'
import { Button } from 'shared/ui/Button'
import { AppLink } from 'shared/ui/AppLink'
import { Dropdown } from 'shared/ui/Dropdown'

import { LoginModal } from 'features/AuthByUsername'
import { classNames } from 'shared/lib/classNames/classNames'
import { getUserAuthData, userActions } from '../../../entities/User'

import { RoutePaths } from 'shared/config/routeConfig/routeConfig'

import styles from './Navbar.module.scss'

interface INavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: INavbarProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const authData = useSelector(getUserAuthData)

  const [isAuthModal, setIsAuthModal] = useState<boolean>(false)

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

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
          to={RoutePaths.ARTICLE_CREATE}
          theme='secondary'
        >
          {t('createArticle')}
        </AppLink>
        <Dropdown
          className={classNames(styles.dropdown)}
          items={[
            {
              content: t('profile'),
              href: RoutePaths.PROFILE + authData.id,
            },
            {
              content: t('logOut'),
              onClick: onLogout,
            },
          ]}
          direction='bottom left'
          trigger={<Avatar size={30} src={authData.avatar} />}
        />
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
