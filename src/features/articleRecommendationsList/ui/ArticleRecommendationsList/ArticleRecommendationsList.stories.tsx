import { ComponentStory, ComponentMeta } from '@storybook/react'
// @ts-expect-error
import withMock from 'storybook-addon-mock'

import { Article } from '../../../../entities/Article'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { ArticleRecommendationsList, IArticleRecommendationsListProps } from './ArticleRecommendationsList'

export default {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  argTypes: {
  },
  decorators: [withMock],
} as ComponentMeta<typeof ArticleRecommendationsList>

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args: IArticleRecommendationsListProps) => <ArticleRecommendationsList {...args} />

const article: Article = {
  id: '1',
  img: '',
  createdAt: '',
  views: 123,
  user: { id: '1', username: '123' },
  blocks: [],
  type: [],
  title: 'title',
  subtitle: 'subtitle',
}

export const Normal = Template.bind({})
Normal.args = {
}
// @ts-expect-error
Normal.decorators = [StoreDecorator({})]
Normal.parameters = {
  mockData: [{
    url: `${__API__}/articles?_limit=3`,
    method: 'GET',
    status: 200,
    response: [
      { ...article, id: '1' },
      { ...article, id: '2' },
      { ...article, id: '3' },
    ],
  }],
}
