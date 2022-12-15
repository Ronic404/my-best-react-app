import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from '@/shared/constants/theme'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'

import MainPage from './MainPage'

export default {
  title: 'Pages/MainPage',
  component: MainPage,
  argTypes: {
  },
  // @ts-expect-error
  decorators: [StoreDecorator()],
} as ComponentMeta<typeof MainPage>

const Template: ComponentStory<typeof MainPage> = () => <MainPage />

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
