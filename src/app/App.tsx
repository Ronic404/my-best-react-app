import { FC } from 'react'
import { Link } from 'react-router-dom'

import { AppRouter } from './providers/router'

import { useTheme } from './providers/ThemeProvider'

import { classNames } from 'shared/lib/classNames/classNames'

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
      <AppRouter />
    </div>
  )
}
