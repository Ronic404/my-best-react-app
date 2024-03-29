import { useSelector } from 'react-redux'

import { SidebarItemType } from '../types/sidebar'
import { getUserAuthData } from '../../../../entities/User'

import { toggleFeatures } from '@/shared/lib/features'
import { getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile } from '@/shared/constants/router'

import ArticleIconDeprecated from '@/shared/assets/icons/article-20-20.svg'
import ProfileIconDeprecated from '@/shared/assets/icons/profile-20-20.svg'
import AboutIconDeprecated from '@/shared/assets/icons/about-20-20.svg'
import MainIconDeprecated from '@/shared/assets/icons/main-20-20.svg'

import MainIcon from '@/shared/assets/icons/home.svg'
import ArticleIcon from '@/shared/assets/icons/article.svg'
import AboutIcon from '@/shared/assets/icons/Info.svg'
import ProfileIcon from '@/shared/assets/icons/avatar.svg'

export const useSidebarItems = (): SidebarItemType[] => {
  const userData = useSelector(getUserAuthData)
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        off: () => MainIconDeprecated,
        on: () => MainIcon,
      }),
      text: 'main',
    },
    {
      path: getRouteAbout(),
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        off: () => AboutIconDeprecated,
        on: () => AboutIcon,
      }),
      text: 'about',
    },
  ]

  if (userData) {
    sidebarItemsList.push(
      {
        path: getRouteProfile(userData.id),
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          off: () => ProfileIconDeprecated,
          on: () => ProfileIcon,
        }),
        text: 'profile',
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          off: () => ArticleIconDeprecated,
          on: () => ArticleIcon,
        }),
        text: 'articles',
        authOnly: true,
      },
    )
  }

  return sidebarItemsList
}
