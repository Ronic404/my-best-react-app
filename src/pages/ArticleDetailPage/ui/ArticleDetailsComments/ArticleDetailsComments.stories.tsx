import { ComponentStory, ComponentMeta } from '@storybook/react'

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { ArticleDetailsComments, IArticleDetailsCommentsProps } from './ArticleDetailsComments'

export default {
  title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
  component: ArticleDetailsComments,
  argTypes: {
  },
} as ComponentMeta<typeof ArticleDetailsComments>

const Template: ComponentStory<typeof ArticleDetailsComments> = (args: IArticleDetailsCommentsProps) => <ArticleDetailsComments {...args} />

export const Normal = Template.bind({})
Normal.args = {
  id: '1',
}
// @ts-expect-error
Normal.decorators = [StoreDecorator({})]
