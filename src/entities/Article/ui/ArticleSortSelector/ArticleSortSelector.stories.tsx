import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ArticleSortSelector, IArticleSortSelectorProps } from './ArticleSortSelector'

export default {
  title: 'entities/Article/ArticleSortSelector',
  component: ArticleSortSelector,
  argTypes: {
  },
} as ComponentMeta<typeof ArticleSortSelector>

const Template: ComponentStory<typeof ArticleSortSelector> = (args: IArticleSortSelectorProps) => <ArticleSortSelector {...args} />

export const Normal = Template.bind({})
Normal.args = {
}
