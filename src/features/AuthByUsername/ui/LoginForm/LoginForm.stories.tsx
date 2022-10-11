import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LoginForm, ILoginFormProps } from './LoginForm'

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
  },
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

export const Primary = Template.bind({})
Primary.args = {

} as ILoginFormProps
