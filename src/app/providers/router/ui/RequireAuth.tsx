import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

import { getUserAuthData } from 'entities/User'
import { RoutePaths } from 'shared/config/routeConfig/routeConfig'

export const RequireAuth: FC = ({ children }: any) => {
  const auth = useSelector(getUserAuthData)
  const location = useLocation()

  if (!auth) {
    return <Navigate to={RoutePaths.MAIN} state={{ from: location }} replace />
  }

  return children
}
