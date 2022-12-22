import { screen } from '@testing-library/react'

import { AppRouter } from './AppRouter'

import { UserRole } from '@/entities/User'
import { ComponentRender } from '@/shared/lib/tests/ComponentRender'
import { getRouteAbout, getRouteAdminPanel, getRouteProfile } from '@/shared/constants/router'

describe('app/router/AppRouter', () => {
  test('Страница должна отрендериться', async () => {
    ComponentRender(<AppRouter />, {
      route: getRouteAbout(),
    })

    const page = await screen.findByTestId('AboutPage')
    expect(page).toBeInTheDocument()
  })

  test('Страница не найдена', async () => {
    ComponentRender(<AppRouter />, {
      route: '/rwetywywe',
    })

    const page = await screen.findByTestId('NotFoundPage')
    expect(page).toBeInTheDocument()
  })

  test('Редирект неавторизованного пользователя на главную', async () => {
    ComponentRender(<AppRouter />, {
      route: getRouteProfile('1'),
    })

    const page = await screen.findByTestId('MainPage')
    expect(page).toBeInTheDocument()
  })

  test('Доступ к закрытой странице для авторизованного пользователя', async () => {
    ComponentRender(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        user: { _inited: true, authData: {} },
      },
    })

    const page = await screen.findByTestId('ProfilePage')
    expect(page).toBeInTheDocument()
  })

  test('Доступ запрещён, отсутствует роль', async () => {
    ComponentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: { _inited: true, authData: {} },
      },
    })

    const page = await screen.findByTestId('ForbiddenPage')
    expect(page).toBeInTheDocument()
  })

  test('Доступ разрешён, присутствует роль', async () => {
    ComponentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: { _inited: true, authData: { roles: [UserRole.ADMIN] } },
      },
    })

    const page = await screen.findByTestId('AdminPanelPage')
    expect(page).toBeInTheDocument()
  })
})
