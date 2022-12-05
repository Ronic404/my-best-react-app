import { ComponentStory, ComponentMeta } from '@storybook/react'

import { NotificationItem, INotificationItemProps } from './NotificationItem'

export default {
  title: 'shared/NotificationItem',
  component: NotificationItem,
  argTypes: {
  },
} as ComponentMeta<typeof NotificationItem>

const Template: ComponentStory<typeof NotificationItem> = (args: INotificationItemProps) => <NotificationItem {...args} />

export const Normal = Template.bind({})
Normal.args = {
}
