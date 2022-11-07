import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import AddCommentForm, { IAddCommentFormProps } from './AddCommentForm'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

export default {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
  argTypes: {
  },
} as ComponentMeta<typeof AddCommentForm>

const Template: ComponentStory<typeof AddCommentForm> = (args: IAddCommentFormProps) => <AddCommentForm {...args} />

export const Normal = Template.bind({})
Normal.args = {
  onSendComment: action('onSendComment'),
}
Normal.decorators = [
  // @ts-expect-error
  StoreDecorator({}),
]
