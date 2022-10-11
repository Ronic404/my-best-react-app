import { ReactNode } from 'react'
import { Story } from '@storybook/react'
import { DeepPartial } from '@reduxjs/toolkit'

import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story): ReactNode => {
  return (
    <StoreProvider initialState={state}>
      <StoryComponent />
    </StoreProvider>
  )
}
