import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Popover, IPopoverProps } from './Popover'

export default {
  title: 'shared/Popover',
  component: Popover,
  argTypes: {
  },
} as ComponentMeta<typeof Popover>

const Template: ComponentStory<typeof Popover> = (args: IPopoverProps) => <Popover {...args} />

export const Normal = Template.bind({})
Normal.args = {
}
