import { ComponentStory, ComponentMeta } from '@storybook/react'

import { CommentList, ICommentListProps } from './CommentList'

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {
  },
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (args: ICommentListProps) => <CommentList {...args} />

export const Normal = Template.bind({})
Normal.args = {
  comments: [
    {
      id: '1',
      text: 'Hello world',
      user: { id: '1', username: 'Alex' },
    },
    {
      id: '2',
      text: 'Hi',
      user: { id: '2', username: 'Vova' },
    },
  ],
}

export const Loading = Template.bind({})
Loading.args = {
  comments: [],
  isLoading: true,
}
