import { ReactNode } from 'react'
import { Story } from '@storybook/react'

import 'app/styles/index.scss'

export const StyleDecorator = (StoryComponent: Story): ReactNode => <StoryComponent />
