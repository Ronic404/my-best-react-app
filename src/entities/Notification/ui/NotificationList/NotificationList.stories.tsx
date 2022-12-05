import { ComponentStory, ComponentMeta } from '@storybook/react'

import { NotificationList, INotificationListProps } from './NotificationList'

export default {
  title: 'shared/NotificationList',
  component: NotificationList,
  argTypes: {
  },
} as ComponentMeta<typeof NotificationList>

const Template: ComponentStory<typeof NotificationList> = (args: INotificationListProps) => <NotificationList {...args} />

export const Normal = Template.bind({})
Normal.args = {
}
