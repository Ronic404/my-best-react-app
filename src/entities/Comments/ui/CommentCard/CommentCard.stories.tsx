import { ComponentStory, ComponentMeta } from '@storybook/react'

import { CommentCard, ICommentCardProps } from './CommentCard'

export default {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  argTypes: {
  },
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args: ICommentCardProps) => <CommentCard {...args} />

export const Normal = Template.bind({})
Normal.args = {
  comment: {
    id: '1',
    text: 'Hello world',
    user: { id: '1', username: 'Alex' },
  },
}

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true,
}
