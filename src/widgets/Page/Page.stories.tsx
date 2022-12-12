import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Page, IPageProps } from './Page'

export default {
  title: 'widgets/Page',
  component: Page,
  argTypes: {
  },
} as ComponentMeta<typeof Page>

const Template: ComponentStory<typeof Page> = (args: IPageProps) => <Page {...args} />

export const Normal = Template.bind({})
Normal.args = {
}
