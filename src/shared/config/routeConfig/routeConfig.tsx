import { RouteProps } from "react-router-dom";

import MainPage from "pages/MainPage";
import AboutPage from "pages/AboutPage";

enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: '/',
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: '/about',
    element: <AboutPage />,
  },
}
