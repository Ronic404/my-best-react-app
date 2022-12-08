import { memo, useCallback } from 'react'

import { Button } from '../Button'
import { classNames } from '@/shared/lib/classNames/classNames'

import CopyIcon from '@/shared/assets/icons/copy-20-20.svg'

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
    <pre className={classNames(styles.code, {}, [className])}>
      <Button className={styles.copyBtn} theme='clear' onClick={onCopy}>
        <CopyIcon className={styles.copyIcon} />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  )
})
