import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from 'shared/ui/Button'
import { classNames } from 'shared/lib/classNames/classNames'

import styles from './LangSwitcher.module.scss'

interface ILangSwitcherProps {
  className?: string
}

export const LangSwitcher: FC<ILangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation()

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      className={classNames(styles.langSwitcher, {}, [className])}
      theme='clear'
      onClick={toggle}
    >
      {t('language')}
    </Button>
  )
}
