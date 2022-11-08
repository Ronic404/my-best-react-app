import { createSelector } from '@reduxjs/toolkit'

import { RoutePaths } from 'shared/config/routeConfig/routeConfig'
import { getUserAuthData } from '../../../../entities/User'
import { SidebarItemType } from '../types/sidebar'

import ArticleIcon from 'shared/assets/icons/article-20-20.svg'
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
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
    ]

    if (userData) {
      sidebarItemsList.push(
        {
          path: RoutePaths.PROFILE + userData.id,
          icon: ProfileIcon,
          text: 'profile',
          authOnly: true,
        },
        {
          path: RoutePaths.ARTICLES,
          icon: ArticleIcon,
          text: 'articles',
          authOnly: true,
        },
      )
    }

    return sidebarItemsList
  },
)
