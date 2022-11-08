import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Text } from '../Text'
import { Card, ICardProps } from './Card'

export default {
  title: 'shared/Card',
  component: Card,
  argTypes: {
  },
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args: ICardProps) => <Card {...args} />

export const Normal = Template.bind({})
Normal.args = {
  children: <Text title='title' text='text text' />,
}
