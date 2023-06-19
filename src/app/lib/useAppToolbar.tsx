import { ReactElement } from 'react'

import { AppRoutes } from '@/shared/constants/router'
import { ScrollToolbar } from '@/widgets/ScrollToolbar'
import { useRouteChange } from '@/shared/lib/router/useRouteChange'

export function useAppToolbar(): JSX.Element | undefined {
  const appRoute = useRouteChange()

  const toolbarByAppRoute: OptionalRecord<AppRoutes, ReactElement> = {
    [AppRoutes.ARTICLES]: <ScrollToolbar />,
    [AppRoutes.ARTICLE_DETAILS]: <ScrollToolbar />,
  }

  return toolbarByAppRoute[appRoute]
}
