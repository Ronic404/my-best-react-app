import { Profile } from '../../types/profile'
import { StateSchema } from 'app/providers/StoreProvider'

export const getProfileForm = (state: StateSchema): Profile => state.profile?.form as Profile
