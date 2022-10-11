import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Input } from 'shared/ui/Input'
import { Button } from 'shared/ui/Button'
import { classNames } from 'shared/lib/classNames/classNames'

import styles from './LoginForm.module.scss'

export interface ILoginFormProps {
  className?: string
}

export const LoginForm: FC<ILoginFormProps> = ({ className }) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(styles.loginForm, {}, [className])}>
      <Input
        className={styles.input}
        type="text"
        placeholder={t('enterUsername')}
        autoFocus
      />
      <Input
        className={styles.input}
        type="text"
        placeholder={t('enterPassword')}
      />
      <Button className={styles.loginBtn}>
        {t('logIn')}
      </Button>
    </div>
  )
}
