import { ComponentStory, ComponentMeta } from '@storybook/react'

import { StarRating, IStarRatingProps } from './StarRating'

export default {
  title: 'shared/StarRating',
  component: StarRating,
  argTypes: {
  },
} as ComponentMeta<typeof StarRating>

const Template: ComponentStory<typeof StarRating> = (args: IStarRatingProps) => <StarRating {...args} />

export const Normal = Template.bind({})
Normal.args = {
}
