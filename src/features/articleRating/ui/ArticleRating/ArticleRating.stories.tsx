import { ComponentStory, ComponentMeta } from '@storybook/react'

import ArticleRating, { IArticleRatingProps } from './ArticleRating'

export default {
  title: 'shared/ArticleRating',
  component: ArticleRating,
  argTypes: {
  },
} as ComponentMeta<typeof ArticleRating>

const Template: ComponentStory<typeof ArticleRating> = (args: IArticleRatingProps) => <ArticleRating {...args} />

export const Normal = Template.bind({})
Normal.args = {
}
