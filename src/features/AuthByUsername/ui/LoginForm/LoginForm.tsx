import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { Text } from 'shared/ui/Text'
import { Input } from 'shared/ui/Input'
import { Button } from 'shared/ui/Button'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader'
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'

import styles from './LoginForm.module.scss'

export interface ILoginFormProps {
  className?: string
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
}

const LoginForm = memo(({ className }: ILoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)

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
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
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
    </DynamicModuleLoader>
  )
})

export default LoginForm
