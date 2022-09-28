import { ReactNode } from 'react'
import { Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

export const RouterDecorator = (StoryComponent: Story): ReactNode => {
  return (
    <BrowserRouter>
      <StoryComponent />
    </BrowserRouter>
  )
}
