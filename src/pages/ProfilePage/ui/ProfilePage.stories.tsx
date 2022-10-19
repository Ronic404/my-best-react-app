import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import ProfilePage from './ProfilePage'

export default {
  title: 'Pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
  },
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />

export const Normal = Template.bind({})
Normal.args = {}
// @ts-expect-error
Normal.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.args = {}
// @ts-expect-error
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
