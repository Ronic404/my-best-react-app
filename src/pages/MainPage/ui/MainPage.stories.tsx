import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import MainPage from './MainPage'

export default {
  title: 'Pages/MainPage',
  component: MainPage,
  argTypes: {
  },
} as ComponentMeta<typeof MainPage>

const Template: ComponentStory<typeof MainPage> = () => <MainPage />

export const Normal = Template.bind({})
Normal.args = {}
// @ts-expect-error
Normal.decorators = [StoreDecorator()]

export const Dark = Template.bind({})
Dark.args = {}
// @ts-expect-error
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator()]
