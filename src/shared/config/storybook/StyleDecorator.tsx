import { ReactNode } from 'react'
import { Story } from '@storybook/react'

// eslint-disable-next-line ronic-plugin/layer-imports
import '@/app/styles/index.scss'

export const StyleDecorator = (StoryComponent: Story): ReactNode => <StoryComponent />
