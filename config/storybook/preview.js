import { addDecorator } from '@storybook/react'

import { Theme } from '../../src/shared/constants/theme'
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator'
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator'
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
}

addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
addDecorator(RouterDecorator)
addDecorator(SuspenseDecorator)
