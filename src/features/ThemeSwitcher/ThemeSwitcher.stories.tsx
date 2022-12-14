import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from '@/shared/constants/theme'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'

import { ThemeSwitcher } from './ThemeSwitcher'

export default {
  title: 'widgets/ThemeSwitcher',
  component: ThemeSwitcher,
  argTypes: {
  },
} as ComponentMeta<typeof ThemeSwitcher>

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
