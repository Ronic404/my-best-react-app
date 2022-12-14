import { FC, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

import { getRouteForbidden, getRouteMain } from '@/shared/constants/router'
import { getUserAuthData, getUserRoles, UserRole } from '../../../../entities/User'

interface IRequireAuthProps {
  children: any
  roles?: UserRole[]
}

export const RequireAuth: FC<IRequireAuthProps> = ({ children, roles }) => {
  const location = useLocation()

  const auth = useSelector(getUserAuthData)
  const userRoles = useSelector(getUserRoles)

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true
    }

    return roles.some((requiredRole) => {
      const hasRole = userRoles?.includes(requiredRole)
      return hasRole
    })
  }, [roles, userRoles])

  if (!auth) {
    return <Navigate to={getRouteMain()} state={{ from: location }} replace />
  }

  if (!hasRequiredRoles) {
    return <Navigate to={getRouteForbidden()} state={{ from: location }} replace />
  }

  return children
}
