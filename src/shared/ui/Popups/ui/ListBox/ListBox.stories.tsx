import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ListBox } from './ListBox'

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
  },
  decorators: [
    Story => <div style={{ padding: 150 }}><Story /></div>,
  ],
} as ComponentMeta<typeof ListBox>

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />

export const Normal = Template.bind({})
Normal.args = {
  items: [
    { content: '12345654', value: '123' },
    { content: '1234565475', value: '1232' },
  ],
  value: '123',
}

export const TopLeft = Template.bind({})
TopLeft.args = {
  items: [
    { content: '12345654', value: '123' },
    { content: '1234565475', value: '1232' },
  ],
  value: '123',
  direction: 'top left',
}

export const TopRight = Template.bind({})
TopRight.args = {
  items: [
    { content: '12345654', value: '123' },
    { content: '1234565475', value: '1232' },
  ],
  value: '123',
  direction: 'top right',
}

export const BottomLeft = Template.bind({})
BottomLeft.args = {
  items: [
    { content: '12345654', value: '123' },
    { content: '1234565475', value: '1232' },
  ],
  value: '123',
  direction: 'bottom left',
}

export const BottomRight = Template.bind({})
BottomRight.args = {
  items: [
    { content: '12345654', value: '123' },
    { content: '1234565475', value: '1232' },
  ],
  value: '123',
  direction: 'bottom right',
}
