import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import { AppLink, IAppLinkProps } from './AppLink'

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
  },
  args: {
    to: '/',
    children: 'Link',
  },
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
  theme: 'primary',
} as IAppLinkProps

export const Secondary = Template.bind({})
Secondary.args = {
  theme: 'secondary',
} as IAppLinkProps

export const Red = Template.bind({})
Red.args = {
  theme: 'red',
} as IAppLinkProps

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  theme: 'primary',
} as IAppLinkProps
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SecondaryDark = Template.bind({})
SecondaryDark.args = {
  theme: 'secondary',
} as IAppLinkProps
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const RedDark = Template.bind({})
RedDark.args = {
  theme: 'red',
} as IAppLinkProps
RedDark.decorators = [ThemeDecorator(Theme.DARK)]
