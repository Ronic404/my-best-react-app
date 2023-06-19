import { FC, Suspense, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { AppRouter } from './providers/router'

import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { PageLoader } from '@/widgets/PageLoader'
import { MainLayout } from '@/shared/layouts/MainLayout'
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout'

import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'

import { getUserInited, initAuthData } from '../entities/User'

export const App: FC = () => {
  const dispatch = useAppDispatch()
  const inited = useSelector(getUserInited)

  useEffect(() => {
    if (!inited) {
      dispatch(initAuthData())
    }
  }, [dispatch, inited])

  if (!inited) {
    return (
      <ToggleFeatures
        feature='isAppRedesigned'
        on={
          <div className={classNames('app_redesigned', {}, [])} id='app'>
            <AppLoaderLayout />
          </div>
        }
        off={<PageLoader />}
      />
    )
  }

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      off={
        <div className={classNames('app', {}, [])} id='app'>
          <Suspense fallback={<></>}>
            <Navbar />
            <div className='content-page'>
              <Sidebar />
              <AppRouter />
            </div>
          </Suspense>
        </div>
      }
      on={
        <div className={classNames('app_redesigned', {}, [])} id='app'>
          <Suspense fallback={<></>}>
            <MainLayout
              header={<Navbar />}
              content={<AppRouter />}
              sidebar={<Sidebar />}
            />
          </Suspense>
        </div>
      }
    />
  )
}
