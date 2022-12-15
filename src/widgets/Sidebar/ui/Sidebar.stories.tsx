import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from '@/shared/constants/theme'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'

import { Sidebar } from './Sidebar'

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
  argTypes: {
  },
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const Light = Template.bind({})
Light.args = {}
// @ts-expect-error
Light.decorators = [StoreDecorator({
  user: {
    authData: {},
  },
})]

export const Dark = Template.bind({})
Dark.args = {}
// @ts-expect-error
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  user: {
    authData: {},
  },
})]

export const NoAuth = Template.bind({})
NoAuth.args = {}
// @ts-expect-error
NoAuth.decorators = [StoreDecorator({
  user: {},
})]

export const NoAuthDark = Template.bind({})
NoAuthDark.args = {}
// @ts-expect-error
NoAuthDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  user: {},
})]
