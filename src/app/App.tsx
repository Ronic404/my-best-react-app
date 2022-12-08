import { FC, Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppRouter } from './providers/router'

import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'

import { classNames } from '@/shared/lib/classNames/classNames'

import { getUserInited, userActions } from '../entities/User'

export const App: FC = () => {
  const dispatch = useDispatch()
  const inited = useSelector(getUserInited)

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

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
