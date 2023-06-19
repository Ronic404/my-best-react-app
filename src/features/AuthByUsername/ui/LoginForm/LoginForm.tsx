import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { Text } from '@/shared/ui/redesigned/Text'
import { Input } from '@/shared/ui/redesigned/Input'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Button } from '@/shared/ui/redesigned/Button'
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ToggleFeatures } from '@/shared/lib/features'
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button'

import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'

import { classNames } from '@/shared/lib/classNames/classNames'
import { useForceUpdate } from '@/shared/lib/render/forceUpdate'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'

import styles from './LoginForm.module.scss'

export interface ILoginFormProps {
  className?: string
  onSuccess: () => void
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
}

const LoginForm = memo(({ className, onSuccess }: ILoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)
  const forceUpdate = useForceUpdate()

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }))
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess()
      forceUpdate()
    }
  }, [dispatch, forceUpdate, onSuccess, password, username])

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <ToggleFeatures
        feature='isAppRedesigned'
        on={
          <VStack className={classNames(styles.loginForm, {}, [className])} gap='16'>
            <Text title={t('authForm')} />
            {error &&
                <Text variant='error' text={t('error')} />
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
              variant='outline'
              onClick={onLoginClick}
              disabled={isLoading}
            >
              {t('logIn')}
            </Button>
          </VStack>
        }
        off={
          <div className={classNames(styles.loginForm, {}, [className])}>
            <TextDeprecated title={t('authForm')} />
            {error &&
              <TextDeprecated theme='error' text={t('error')} />
            }
            <InputDeprecated
              className={styles.input}
              value={username}
              type="text"
              placeholder={t('enterUsername')}
              autoFocus
              onChange={onChangeUsername}
            />
            <InputDeprecated
              className={styles.input}
              value={password}
              type="text"
              placeholder={t('enterPassword')}
              onChange={onChangePassword}
            />
            <ButtonDeprecated
              className={styles.loginBtn}
              theme='outline'
              onClick={onLoginClick}
              disabled={isLoading}
            >
              {t('logIn')}
            </ButtonDeprecated>
          </div>
        }
      />
    </DynamicModuleLoader>
  )
})

export default LoginForm
