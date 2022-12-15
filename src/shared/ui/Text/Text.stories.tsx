import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from '@/shared/constants/theme'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'

import { Text, ITextProps } from './Text'

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args: ITextProps) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Title title title',
  text: 'text text text',
}

export const Error = Template.bind({})
Error.args = {
  title: 'Title title title',
  text: 'text text text',
  theme: 'error',
}

export const OnlyTitle = Template.bind({})
OnlyTitle.args = {
  title: 'Title title title',
}

export const OnlyText = Template.bind({})
OnlyText.args = {
  text: 'text text text',
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  title: 'Title title title',
  text: 'text text text',
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTitleDark = Template.bind({})
OnlyTitleDark.args = {
  title: 'Title title title',
}
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTextDark = Template.bind({})
OnlyTextDark.args = {
  text: 'text text text',
}
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SizeL = Template.bind({})
SizeL.args = {
  title: 'Title title title',
  text: 'text text text',
  size: 'L',
}

export const SizeM = Template.bind({})
SizeM.args = {
  title: 'Title title title',
  text: 'text text text',
  size: 'M',
}

export const SizeS = Template.bind({})
SizeS.args = {
  title: 'Title title title',
  text: 'text text text',
  size: 'S',
}
