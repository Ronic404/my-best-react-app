import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Avatar, IAvatarProps } from './Avatar'

import AvatarImg from './storybook.jpg'

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
  },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Primary = Template.bind({})
Primary.args = {
  src: AvatarImg,
  size: 150,
} as IAvatarProps

export const Small = Template.bind({})
Small.args = {
  src: AvatarImg,
  size: 50,
} as IAvatarProps
