import { FeatureFlags } from '@/shared/types/featureFlags'
import { LS_LAST_DESIGN_KEY } from '@/shared/constants/localStorage'

const defaultFeatures: FeatureFlags = {
  isAppRedesigned: localStorage.getItem(LS_LAST_DESIGN_KEY) === 'new',
}

let featureFlags: FeatureFlags = {
  ...defaultFeatures,
}

export function setFeatureFlags(newFeatureFlags?: FeatureFlags): void {
  if (newFeatureFlags) {
    featureFlags = newFeatureFlags
  }
}

export function getFeatureFlag(flag: keyof FeatureFlags): boolean | undefined {
  return featureFlags?.[flag]
}

export function getAllFeatureFlags(): FeatureFlags {
  return featureFlags
}
