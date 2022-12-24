import { ComponentStory, ComponentMeta } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { NotificationList, INotificationListProps } from './NotificationList'

export default {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  argTypes: {
  },
} as ComponentMeta<typeof NotificationList>

const Template: ComponentStory<typeof NotificationList> = (args: INotificationListProps) => <NotificationList {...args} />

export const Normal = Template.bind({})
Normal.args = {
}
// @ts-expect-error
Normal.decorators = [StoreDecorator({})]
Normal.parameters = {
  mockData: [{
    url: `${__API__}/notifications`,
    method: 'GET',
    status: 200,
    response: [
      {
        id: '1',
        title: 'Уведомление',
        description: 'Поставь лайк',
      },
      {
        id: '2',
        title: 'Уведомление 2',
        description: 'Поставь лайк 2',
      },
      {
        id: '3',
        title: 'Уведомление 3',
        description: 'Поставь лайк 3',
      },
    ],
  }],
}
