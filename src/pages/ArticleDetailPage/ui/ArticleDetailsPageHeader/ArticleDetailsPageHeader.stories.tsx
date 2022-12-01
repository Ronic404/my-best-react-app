import { ComponentStory, ComponentMeta } from '@storybook/react'

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { ArticleDetailsPageHeader, IArticleDetailsPageHeaderProps } from './ArticleDetailsPageHeader'

export default {
  title: 'pages/ArticleDetailsPage/ArticleDetailsPageHeader',
  component: ArticleDetailsPageHeader,
  argTypes: {
  },
} as ComponentMeta<typeof ArticleDetailsPageHeader>

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args: IArticleDetailsPageHeaderProps) => <ArticleDetailsPageHeader {...args} />

export const Normal = Template.bind({})
Normal.args = {
}
// @ts-expect-error
Normal.decorators = [StoreDecorator({})]
