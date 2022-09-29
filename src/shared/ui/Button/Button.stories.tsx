import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import { Button, IButtonProps } from './Button'

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Normal'
} as IButtonProps

export const Clear = Template.bind({})
Clear.args = {
  children: 'Clear',
  theme: 'clear'
} as IButtonProps

export const Outline = Template.bind({})
Outline.args = {
  children: 'Outline',
  theme: 'outline'
} as IButtonProps

export const OutlineSizeL = Template.bind({})
OutlineSizeL.args = {
  children: 'OutlineSizeL',
  theme: 'outline',
  size: 'l'
} as IButtonProps

export const OutlineSizeXL = Template.bind({})
OutlineSizeXL.args = {
  children: 'OutlineSizeXL',
  theme: 'outline',
  size: 'xl'
} as IButtonProps

export const OutlineDark = Template.bind({})
OutlineDark.args = {
  children: 'OutlineDark',
  theme: 'outline'
} as IButtonProps
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const BackgroundTheme = Template.bind({})
BackgroundTheme.args = {
  children: 'BackgroundTheme',
  theme: 'background'
} as IButtonProps

export const BackgroundInvertedTheme = Template.bind({})
BackgroundInvertedTheme.args = {
  children: 'BackgroundInvertedTheme',
  theme: 'backgroundInverted'
} as IButtonProps

export const Square = Template.bind({})
Square.args = {
  children: '>',
  theme: 'backgroundInverted',
  square: true,
  size: 'm'
} as IButtonProps

export const SquareSizeL = Template.bind({})
SquareSizeL.args = {
  children: '>',
  theme: 'backgroundInverted',
  square: true,
  size: 'l'
} as IButtonProps

export const SquareSizeXL = Template.bind({})
SquareSizeXL.args = {
  children: '>',
  theme: 'backgroundInverted',
  square: true,
  size: 'xl'
} as IButtonProps
