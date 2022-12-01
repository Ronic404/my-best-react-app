import { StateSchema } from 'app/providers/StoreProvider'

export const getProfileIsLoading = (state: StateSchema): boolean => state.profile?.isLoading ?? false
