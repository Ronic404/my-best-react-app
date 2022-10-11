import { StateSchema } from 'app/providers/StoreProvider'
import { User } from '../../types/user'

export const getUserAuthData = (state: StateSchema): User => state.user.authData
