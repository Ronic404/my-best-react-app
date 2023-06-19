import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator'
import { CommentCard, ICommentCardProps } from './CommentCard'

export default {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  argTypes: {
  },
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args: ICommentCardProps) => <CommentCard {...args} />

const normalAgrs = {
  comment: {
    id: '1',
    text: 'Hello world',
    user: { id: '1', username: 'Alex' },
  },
}

export const Normal = Template.bind({})
Normal.args = normalAgrs

export const NormalRedesigned = Template.bind({})
NormalRedesigned.args = normalAgrs
NormalRedesigned.decorators = [FeatureFlagsDecorator({ isAppRedesigned: true })]

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true,
}
