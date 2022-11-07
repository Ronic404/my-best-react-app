import { RouteProps } from 'react-router-dom'

import MainPage from 'pages/MainPage'
import AboutPage from 'pages/AboutPage'
import ProfilePage from 'pages/ProfilePage'
import NotFoundPage from 'pages/NotFoundPage'
import ArticlesPage from 'pages/ArticlesPage'
import ArticleDetailPage from 'pages/ArticleDetailPage'

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
}

enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  NOT_FOUND = 'not_found',
}

export enum RoutePaths {
  MAIN = '/',
  ABOUT = '/about',
  PROFILE = '/profile/', // + :id
  ARTICLES = '/articles',
  ARTICLE_DETAILS = '/articles/', // + :id
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
    path: RoutePaths.PROFILE + ':id',
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: RoutePaths.ARTICLES,
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: RoutePaths.ARTICLE_DETAILS + ':id',
    element: <ArticleDetailPage />,
    authOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePaths.NOT_FOUND,
    element: <NotFoundPage />,
  },
}
