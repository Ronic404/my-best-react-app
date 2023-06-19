import { ReactElement } from 'react'
import { Story } from '@storybook/react'

import { FeatureFlags } from '@/shared/types/featureFlags'
import { setFeatureFlags } from '@/shared/lib/features'

export const FeatureFlagsDecorator = (features: FeatureFlags) => (StoryComponent: Story): ReactElement => {
  setFeatureFlags(features)

  return (
    <StoryComponent />
  )
}
