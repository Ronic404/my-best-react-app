import { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from '@/shared/ui/deprecated/Button'
import { classNames } from '@/shared/lib/classNames/classNames'

interface IBugButtonProps {
  className?: string
}

// Компонент для тестирования ErrorBoundary
export const BugButton: FC<IBugButtonProps> = ({ className }) => {
  const { t } = useTranslation()
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  const onThrow = (): void => setError(true)

  return (
    <Button className={classNames('', {}, [className])} onClick={onThrow}>
      {t('throwError')}
    </Button>
  )
}
