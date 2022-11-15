import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ArticleViewSelector, IArticleViewSelectorProps } from './ArticleViewSelector'

export default {
  title: 'entities/Article/ArticleViewSelector',
  component: ArticleViewSelector,
  argTypes: {
  },
} as ComponentMeta<typeof ArticleViewSelector>

const Template: ComponentStory<typeof ArticleViewSelector> = (args: IArticleViewSelectorProps) => <ArticleViewSelector {...args} />

export const Normal = Template.bind({})
Normal.args = {
}
