export { UserRole } from './model/consts/userConsts'
export type { User, UserSchema } from './model/types/user'
export { userActions, userReducer } from './model/slice/userSlice'

export { getUserInited } from './model/selectors/getUserInited/getUserInited'
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData'
export { getUserRoles, isUserAdmin, isUserManager } from './model/selectors/roleSelectors'
