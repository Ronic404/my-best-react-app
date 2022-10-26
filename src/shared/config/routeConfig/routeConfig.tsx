import { RouteProps } from 'react-router-dom'

import MainPage from 'pages/MainPage'
import AboutPage from 'pages/AboutPage'
import ProfilePage from 'pages/ProfilePage'
import NotFoundPage from 'pages/NotFoundPage'

type AppRoutesProps = RouteProps & {
  authOnly?: boolean
}

enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found',
}

export enum RoutePaths {
  MAIN = '/',
  ABOUT = '/about',
  PROFILE = '/profile',
  NOT_FOUND = '*',
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePaths.MAIN,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePaths.ABOUT,
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: RoutePaths.PROFILE,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePaths.NOT_FOUND,
    element: <NotFoundPage />,
  },
}
