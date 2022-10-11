import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import { Text, ITextProps } from './Text'

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Title title title',
  text: 'text text text',
} as ITextProps

export const Error = Template.bind({})
Error.args = {
  title: 'Title title title',
  text: 'text text text',
  theme: 'error',
} as ITextProps

export const OnlyTitle = Template.bind({})
OnlyTitle.args = {
  title: 'Title title title',
} as ITextProps

export const OnlyText = Template.bind({})
OnlyText.args = {
  text: 'text text text',
} as ITextProps

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  title: 'Title title title',
  text: 'text text text',
} as ITextProps
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTitleDark = Template.bind({})
OnlyTitleDark.args = {
  title: 'Title title title',
} as ITextProps
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTextDark = Template.bind({})
OnlyTextDark.args = {
  text: 'text text text',
} as ITextProps
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]
