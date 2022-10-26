import { memo, Suspense, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import { PageLoader } from 'shared/ui/PageLoader'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

import { getUserAuthData } from '../../../../entities/User'

export const AppRouter = memo(() => {
  const isAuth = useSelector(getUserAuthData)

  const routes = useMemo(() => {
    return Object.values(routeConfig).filter(route => {
      if (route.authOnly && !isAuth) {
        return false
      }
      return true
    })
  }, [isAuth])

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<div className='page-wrapper'>{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  )
})
