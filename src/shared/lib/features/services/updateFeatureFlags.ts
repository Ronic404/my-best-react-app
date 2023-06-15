import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider'
import { FeatureFlags } from '@/shared/types/featureFlags'
import { getAllFeatureFlags } from '../lib/setGetFeatures'
import { updateFeatureFlagsMutation } from '../api/featureFlagsApi'

interface IUpdateFeatureFlagsOptions {
  userId: string
  newFeatures: Partial<FeatureFlags>
}

export const updateFeatureFlag = createAsyncThunk<void, IUpdateFeatureFlagsOptions, ThunkConfig<string>>(
  'user/saveJsonSettings',
  async ({ userId, newFeatures }, thunkApi) => {
    const { dispatch, rejectWithValue } = thunkApi

    try {
      await dispatch(updateFeatureFlagsMutation({
        userId,
        features: {
          ...getAllFeatureFlags(),
          ...newFeatures,
        },
      }))

      window.location.reload()
    } catch (error) {
      console.log(error)
      return rejectWithValue('')
    }
  },
)
