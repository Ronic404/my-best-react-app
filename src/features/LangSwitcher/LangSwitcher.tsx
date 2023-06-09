import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from '@/shared/ui/redesigned/Button'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { Button as ButtonDeprecated } from '../../shared/ui/deprecated/Button'

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
    <ToggleFeatures
      feature='isAppRedesigned'
      on={<Button variant='clear' onClick={toggle}>{t(short ? 'shortLang' : 'language')}</Button>}
      off={
        <ButtonDeprecated
          className={classNames(styles.langSwitcher, {}, [className])}
          theme='clear'
          onClick={toggle}
        >
          {t(short ? 'shortLang' : 'language')}
        </ButtonDeprecated>
      }
    />
  )
})
