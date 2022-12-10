import { ComponentStory, ComponentMeta } from '@storybook/react'

import { RatingCard, IRatingCardProps } from './RatingCard'

export default {
  title: 'entities/Rating/RatingCard',
  component: RatingCard,
  argTypes: {
  },
} as ComponentMeta<typeof RatingCard>

const Template: ComponentStory<typeof RatingCard> = (args: IRatingCardProps) => <RatingCard {...args} />

export const Normal = Template.bind({})
Normal.args = {
}
