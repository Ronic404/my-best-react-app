import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ArticleTypeTabs, IArticleTypeTabsProps } from './ArticleTypeTabs'

export default {
  title: 'entities/Article/ArticleTypeTabs',
  component: ArticleTypeTabs,
  argTypes: {
  },
} as ComponentMeta<typeof ArticleTypeTabs>

const Template: ComponentStory<typeof ArticleTypeTabs> = (args: IArticleTypeTabsProps) => <ArticleTypeTabs {...args} />

export const Normal = Template.bind({})
Normal.args = {
}
