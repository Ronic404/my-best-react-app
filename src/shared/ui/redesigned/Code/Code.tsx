import { memo, useCallback } from 'react'

import { Icon } from '../Icon'
import { Button } from '../../deprecated/Button'
import { ToggleFeatures } from '@/shared/lib/features'

import CopyIcon from '@/shared/assets/icons/copy-20-20.svg'
import CopyIconNew from '@/shared/assets/icons/copy.svg'

import { classNames } from '@/shared/lib/classNames/classNames'

import styles from './Code.module.scss'

export interface ICodeProps {
  className?: string
  text: string
}

export const Code = memo(({ className, text }: ICodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text)
  }, [text])

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <pre className={classNames(styles.codeRedesigned, {}, [className])}>
          <Icon
            className={styles.copyBtn}
            Svg={CopyIconNew}
            clickable
            onClick={onCopy}
          />
          <code>{text}</code>
        </pre>
      }
      off={
        <pre className={classNames(styles.code, {}, [className])}>
          <Button className={styles.copyBtn} theme='clear' onClick={onCopy}>
            <CopyIcon className={styles.copyIcon} />
          </Button>
          <code>{text}</code>
        </pre>
      }
    />
  )
})
