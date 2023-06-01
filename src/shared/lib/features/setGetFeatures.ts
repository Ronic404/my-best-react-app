import { FeatureFlags } from '@/shared/types/featureFlags'

let featureFlags: FeatureFlags

export function setFeatureFlags(newFeatureFlags?: FeatureFlags): void {
  if (newFeatureFlags) {
    featureFlags = newFeatureFlags
  }
}

export function getFeatureFlag(flag: keyof FeatureFlags): boolean | undefined {
  return featureFlags[flag]
}
