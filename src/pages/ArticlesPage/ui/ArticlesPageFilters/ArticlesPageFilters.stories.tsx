import { ComponentStory, ComponentMeta } from '@storybook/react'

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { ArticlesPageFilters, IArticlesPageFiltersProps } from './ArticlesPageFilters'

export default {
  title: 'pages/Article/ArticlesPageFilters',
  component: ArticlesPageFilters,
  argTypes: {
  },
} as ComponentMeta<typeof ArticlesPageFilters>

const Template: ComponentStory<typeof ArticlesPageFilters> = (args: IArticlesPageFiltersProps) => <ArticlesPageFilters {...args} />

export const Normal = Template.bind({})
Normal.args = {
}
// @ts-expect-error
Normal.decorators = [StoreDecorator({
  articlesPage: {},
})]
