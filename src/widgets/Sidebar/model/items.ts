import { RoutePaths } from 'shared/config/routeConfig/routeConfig'

import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg'

export interface SidebarItemType {
  path: string
  text: string
  icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePaths.MAIN,
    icon: MainIcon,
    text: 'main',
  },
  {
    path: RoutePaths.ABOUT,
    icon: AboutIcon,
    text: 'about',
  },
  {
    path: RoutePaths.PROFILE,
    icon: ProfileIcon,
    text: 'profile',
    authOnly: true,
  },
]
