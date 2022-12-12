import { ComponentStory, ComponentMeta } from '@storybook/react'
// @ts-expect-error
import withMock from 'storybook-addon-mock'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import ArticleRating, { IArticleRatingProps } from './ArticleRating'

export default {
  title: 'features/ArticleRating',
  component: ArticleRating,
  argTypes: {
  },
  decorators: [withMock],
} as ComponentMeta<typeof ArticleRating>

const Template: ComponentStory<typeof ArticleRating> = (args: IArticleRatingProps) => <ArticleRating {...args} />

export const Normal = Template.bind({})
Normal.args = {
  articleId: '1',
}
Normal.decorators = [
  // @ts-expect-error
  StoreDecorator({
    user: {
      authData: { id: '1' },
    },
  }),
]
Normal.parameters = {
  mockData: [{
    url: `${__API__}/article-ratings?userId=1&articleId=1`,
    method: 'GET',
    status: 200,
    response: [
      {
        rate: 4,
      },
    ],
  }],
}

export const WithoutRate = Template.bind({})
WithoutRate.args = {
  articleId: '1',
}
WithoutRate.decorators = [
  // @ts-expect-error
  StoreDecorator({
    user: {
      authData: { id: '1' },
    },
  }),
]
WithoutRate.parameters = {
  mockData: [{
    url: `${__API__}/article-ratings?userId=1&articleId=1`,
    method: 'GET',
    status: 200,
    response: [],
  }],
}
