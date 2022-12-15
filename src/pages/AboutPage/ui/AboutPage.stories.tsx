import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from '@/shared/constants/theme'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'

import AboutPage from './AboutPage'

export default {
  title: 'Pages/AboutPage',
  component: AboutPage,
  argTypes: {
  },
} as ComponentMeta<typeof AboutPage>

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
