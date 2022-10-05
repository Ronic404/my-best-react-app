import { FC, Suspense } from 'react'

import { AppRouter } from './providers/router'

import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

import { classNames } from 'shared/lib/classNames/classNames'

export const App: FC = () => {
  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback={<></>}>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}
