import { StateSchema } from 'app/providers/StoreProvider'

import { ValidateProfileError } from '../../types/editableProfileCardSchema'

export const getProfileValidateErrors = (state: StateSchema): ValidateProfileError[] => state.profile?.validateErrors ?? []
