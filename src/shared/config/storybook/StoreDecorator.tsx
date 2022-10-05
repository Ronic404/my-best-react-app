import { ReactNode } from 'react'
import { Story } from '@storybook/react'
import { StoreProvider } from 'app/providers/StoreProvider'

export const StoreDecorator = (StoryComponent: Story): ReactNode => {
  return (
    <StoreProvider>
      <StoryComponent />
    </StoreProvider>
  )
}
