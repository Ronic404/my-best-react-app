import { RouteProps } from 'react-router-dom'

import MainPage from 'pages/MainPage'
import AboutPage from 'pages/AboutPage'
import ProfilePage from 'pages/ProfilePage'
import NotFoundPage from 'pages/NotFoundPage'
import ArticlesPage from 'pages/ArticlesPage'
import ForbiddenPage from 'pages/ForbiddenPage'
import AdminPanelPage from 'pages/AdminPanelPage'
import ArticleEditPage from 'pages/ArticleEditPage'
import ArticleDetailPage from 'pages/ArticleDetailPage'

import { UserRole } from 'entities/User/model/types/user'

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
  roles?: UserRole[]
}

enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  FORBIDDEN = 'forbidden',
  ADMIN_PANEL = 'admin_panel',
  ARTICLE_EDIT = 'articles_edit',
  ARTICLE_CREATE = 'articles_create',
  ARTICLE_DETAILS = 'articles_details',
  NOT_FOUND = 'not_found',
}

export enum RoutePaths {
  MAIN = '/',
  ABOUT = '/about',
  PROFILE = '/profile/', // + :id
  ARTICLES = '/articles',
  FORBIDDEN = '/forbidden',
  ADMIN_PANEL = '/admin',
  ARTICLE_EDIT = '/articles/:id/edit',
  ARTICLE_CREATE = '/articles/create',
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
  [AppRoutes.FORBIDDEN]: {
    path: RoutePaths.FORBIDDEN,
    element: <ForbiddenPage />,
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: RoutePaths.ADMIN_PANEL,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.ADMIN, UserRole.MANAGER],
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: RoutePaths.ARTICLE_EDIT,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_CREATE]: {
    path: RoutePaths.ARTICLE_CREATE,
    element: <ArticleEditPage />,
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
