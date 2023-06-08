import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Code, ICodeProps } from './Code'

export default {
  title: 'shared/Code',
  component: Code,
  argTypes: {
  },
} as ComponentMeta<typeof Code>

const Template: ComponentStory<typeof Code> = (args: ICodeProps) => <Code {...args} />

export const Normal = Template.bind({})
Normal.args = {
  text: `
    import { ComponentStory, ComponentMeta } from '@storybook/react'

    import { Code, ICodeProps } from './Code'

    export default {
      title: 'shared/Code',
      component: Code,
      argTypes: {
      },
    } as ComponentMeta<typeof Code>

    const Template: ComponentStory<typeof Code> = (args: ICodeProps) => <Code {...args} />
  `,
}
