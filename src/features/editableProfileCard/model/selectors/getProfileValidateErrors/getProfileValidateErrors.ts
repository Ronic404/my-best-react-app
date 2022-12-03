import { StateSchema } from 'app/providers/StoreProvider'

import { ValidateProfileError } from '../../consts/consts'

export const getProfileValidateErrors = (state: StateSchema): ValidateProfileError[] => state.profile?.validateErrors ?? []
