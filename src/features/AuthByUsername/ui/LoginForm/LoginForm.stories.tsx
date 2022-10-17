import { ComponentStory, ComponentMeta } from '@storybook/react'

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import LoginForm, { ILoginFormProps } from './LoginForm'

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
  },
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

export const Primary = Template.bind({})
Primary.args = {} as ILoginFormProps
Primary.decorators = [StoreDecorator({
  loginForm: { username: '123', password: '456' }
})]

export const WithError = Template.bind({})
WithError.args = {} as ILoginFormProps
WithError.decorators = [StoreDecorator({
  loginForm: { username: '123', password: '456', error: 'ERROR' }
})]

export const Loading = Template.bind({})
Loading.args = {} as ILoginFormProps
Loading.decorators = [StoreDecorator({
  loginForm: { isLoading: true }
})]
