import { RouteProps } from 'react-router-dom'

import MainPage from 'pages/MainPage'
import AboutPage from 'pages/AboutPage'
import ProfilePage from 'pages/ProfilePage'
import NotFoundPage from 'pages/NotFoundPage'

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

export const routeConfig: Record<AppRoutes, RouteProps> = {
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
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePaths.NOT_FOUND,
    element: <NotFoundPage />,
  },
}
