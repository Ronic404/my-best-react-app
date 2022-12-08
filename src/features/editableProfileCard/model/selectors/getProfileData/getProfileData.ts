import { Profile } from '../../../../../entities/Profile/model/types/profile'
import { StateSchema } from '@/app/providers/StoreProvider'

export const getProfileData = (state: StateSchema): Profile => state.profile?.data as Profile
