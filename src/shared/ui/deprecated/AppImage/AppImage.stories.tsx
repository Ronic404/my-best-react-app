import { ComponentStory, ComponentMeta } from '@storybook/react'

import { AppImage, IAppImageProps } from './AppImage'

export default {
  title: 'shared/AppImage',
  component: AppImage,
  argTypes: {
  },
} as ComponentMeta<typeof AppImage>

const Template: ComponentStory<typeof AppImage> = (args: IAppImageProps) => <AppImage {...args} />

export const Normal = Template.bind({})
Normal.args = {
}
