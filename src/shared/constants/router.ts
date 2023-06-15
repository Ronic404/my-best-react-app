export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  SETTINGS = 'settings',
  FORBIDDEN = 'forbidden',
  ADMIN_PANEL = 'admin_panel',
  ARTICLE_EDIT = 'articles_edit',
  ARTICLE_CREATE = 'articles_create',
  ARTICLE_DETAILS = 'articles_details',
  NOT_FOUND = 'not_found',
}

export const getRouteMain = (): string => '/'
export const getRouteAbout = (): string => '/about'
export const getRouteProfile = (id: string): string => `/profile/${id}`
export const getRouteArticles = (): string => '/articles'
export const getRouteSettings = (): string => '/settings'
export const getRouteForbidden = (): string => '/forbidden'
export const getRouteAdminPanel = (): string => '/admin'
export const getRouteArticleEdit = (id: string): string => `/articles/${id}/edit`
export const getRouteArticleCreate = (): string => '/articles/create'
export const getRouteArticleDetails = (id: string): string => `/articles/${id}`
export const getRouteNotFound = (): string => '*'
