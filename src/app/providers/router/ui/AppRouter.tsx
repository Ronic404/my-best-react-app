import { FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { PageLoader } from 'shared/ui/PageLoader'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

export const AppRouter: FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<div className='page-wrapper'>{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  )
}
