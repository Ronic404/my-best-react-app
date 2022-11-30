import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '../Button'
import { Dropdown } from './Dropdown'

export default {
  title: 'shared/Dropdown',
  component: Dropdown,
  argTypes: {
  },
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />

export const Normal = Template.bind({})
Normal.args = {
  trigger: <Button>Open</Button>,
  items: [
    {
      content: 'First',
    },
    {
      content: 'Second',
    },
    {
      content: 'Third',
    },
  ],
}
