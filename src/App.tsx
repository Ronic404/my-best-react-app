import { FC, Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage'

import { useTheme } from './theme/useTheme'

import { classNames } from './helpers/classNames/classNames'

import './styles/index.scss'

export const App: FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <br />
      <Link to='/'>Главная</Link>
      &nbsp;
      <Link to='/about'>О сайте</Link>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}
