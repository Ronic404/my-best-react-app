import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Select, ISelectProps } from './Select'

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
  },
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args: ISelectProps<string>) => <Select {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Value',
  options: [
    { value: '123', content: '123' },
    { value: '1234', content: '1234' },
    { value: '12345', content: '12345' },
  ],
}
