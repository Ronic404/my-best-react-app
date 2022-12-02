import { ReactNode, Suspense } from 'react'
import { Story } from '@storybook/react'

export const SuspenseDecorator = (StoryComponent: Story): ReactNode => (
  <Suspense fallback=''>
    <StoryComponent />
  </Suspense>
)
