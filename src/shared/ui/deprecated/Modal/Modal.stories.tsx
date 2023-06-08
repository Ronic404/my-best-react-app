import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from '@/shared/constants/theme'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'

import { Modal, IModalProps } from './Modal'

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Modal',
  isOpen: true,
} as IModalProps

export const Dark = Template.bind({})
Dark.args = {
  children: 'Modal dark',
  isOpen: true,
} as IModalProps
Dark.decorators = [ThemeDecorator(Theme.DARK)]
