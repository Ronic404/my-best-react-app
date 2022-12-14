export enum AppRoutes {
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
