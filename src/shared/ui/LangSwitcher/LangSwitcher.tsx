import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from '../Button'
import { classNames } from '@/shared/lib/classNames/classNames'

import styles from './LangSwitcher.module.scss'

interface ILangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher = memo(({ className, short }: ILangSwitcherProps) => {
  const { t, i18n } = useTranslation()

  const toggle = (): void => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      className={classNames(styles.langSwitcher, {}, [className])}
      theme='clear'
      onClick={toggle}
    >
      {t(short ? 'shortLang' : 'language')}
    </Button>
  )
})
