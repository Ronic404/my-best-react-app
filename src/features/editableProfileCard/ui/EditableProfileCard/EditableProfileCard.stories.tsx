import { ComponentStory, ComponentMeta } from '@storybook/react'

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { EditableProfileCard, IEditableProfileCardProps } from './EditableProfileCard'

export default {
  title: 'features/EditableProfileCard/EditableProfileCard',
  component: EditableProfileCard,
  argTypes: {
  },
} as ComponentMeta<typeof EditableProfileCard>

const Template: ComponentStory<typeof EditableProfileCard> = (args: IEditableProfileCardProps) => <EditableProfileCard {...args} />

export const Normal = Template.bind({})
Normal.args = {
}
// @ts-expect-error
Normal.decorators = [StoreDecorator({})]
