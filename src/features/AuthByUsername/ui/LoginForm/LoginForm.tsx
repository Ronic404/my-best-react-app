import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { Text } from 'shared/ui/Text'
import { Input } from 'shared/ui/Input'
import { Button } from 'shared/ui/Button'
import { classNames } from 'shared/lib/classNames/classNames'

import { loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'

import styles from './LoginForm.module.scss'

export interface ILoginFormProps {
  className?: string
}

export const LoginForm = memo(({ className }: ILoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { username, password, error, isLoading } = useSelector(getLoginState)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, password, username])

  return (
    <div className={classNames(styles.loginForm, {}, [className])}>
      <Text title={t('authForm')} />
      {error &&
        <Text theme='error' text={t('error')} />
      }
      <Input
        className={styles.input}
        value={username}
        type="text"
        placeholder={t('enterUsername')}
        autoFocus
        onChange={onChangeUsername}
      />
      <Input
        className={styles.input}
        value={password}
        type="text"
        placeholder={t('enterPassword')}
        onChange={onChangePassword}
      />
      <Button
        className={styles.loginBtn}
        theme='outline'
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('logIn')}
      </Button>
    </div>
  )
})
