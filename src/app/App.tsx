import { FC, Suspense, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { AppRouter } from './providers/router'

import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { PageLoader } from '@/widgets/PageLoader'

import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'

import { getUserInited, initAuthData } from '../entities/User'

export const App: FC = () => {
  const dispatch = useAppDispatch()
  const inited = useSelector(getUserInited)

  useEffect(() => {
    dispatch(initAuthData())
  }, [dispatch])

  if (!inited) {
    return <PageLoader />
  }

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback={<></>}>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          {inited &&
            <AppRouter />
          }
        </div>
      </Suspense>
    </div>
  )
}
