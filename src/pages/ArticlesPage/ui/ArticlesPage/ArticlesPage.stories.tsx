import { ComponentStory, ComponentMeta } from '@storybook/react'

import ArticlesPage, { IArticlesPageProps } from './ArticlesPage'

export default {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
  argTypes: {
  },
} as ComponentMeta<typeof ArticlesPage>

const Template: ComponentStory<typeof ArticlesPage> = (args: IArticlesPageProps) => <ArticlesPage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
