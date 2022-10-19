import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import { Navbar } from './Navbar'

export default {
  title: 'widget/Navbar',
  component: Navbar,
  argTypes: {
  },
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Light = Template.bind({})
Light.args = {}
// @ts-expect-error
Light.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.args = {}
// @ts-expect-error
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]

export const Auth = Template.bind({})
Auth.args = {}
// @ts-expect-error
Auth.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  user: { authData: {} },
})]
