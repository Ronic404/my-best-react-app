import { memo } from 'react'
import { useParams } from 'react-router-dom'

import { Card } from '@/shared/ui/redesigned/Card'
import { ArticleDetails } from '@/entities/Article'

interface IDetailsContainerProps {
  className?: string
}

export const DetailsContainer = memo((props: IDetailsContainerProps) => {
  const { className } = props
  const { id } = useParams<{ id: string }>()

  return (
    <Card className={className} padding='24' border='partial' max>
      <ArticleDetails id={id} />
    </Card>
  )
})
