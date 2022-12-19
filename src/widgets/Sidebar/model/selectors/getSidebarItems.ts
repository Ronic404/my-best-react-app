import { createSelector } from '@reduxjs/toolkit'

import { SidebarItemType } from '../types/sidebar'
import { getUserAuthData } from '../../../../entities/User'

import { getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile } from '@/shared/constants/router'

import ArticleIcon from '@/shared/assets/icons/article-20-20.svg'
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg'
import AboutIcon from '@/shared/assets/icons/about-20-20.svg'
import MainIcon from '@/shared/assets/icons/main-20-20.svg'

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: getRouteMain(),
        icon: MainIcon,
        text: 'main',
      },
      {
        path: getRouteAbout(),
        icon: AboutIcon,
        text: 'about',
      },
    ]

    if (userData) {
      sidebarItemsList.push(
        {
          path: getRouteProfile(userData.id),
          icon: ProfileIcon,
          text: 'profile',
          authOnly: true,
        },
        {
          path: getRouteArticles(),
          icon: ArticleIcon,
          text: 'articles',
          authOnly: true,
        },
      )
    }

    return sidebarItemsList
  },
)
