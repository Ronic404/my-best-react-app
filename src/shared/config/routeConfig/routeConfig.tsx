import { RouteProps } from "react-router-dom";

import MainPage from "pages/MainPage";
import AboutPage from "pages/AboutPage";

enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about'
}

export enum RoutePaths {
  MAIN = '/',
  ABOUT = '/about',
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
}
