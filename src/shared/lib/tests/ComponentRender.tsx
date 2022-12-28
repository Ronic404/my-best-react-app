import { ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import { render } from '@testing-library/react'
import { ReducersMapObject } from '@reduxjs/toolkit'

import i18nForTests from '@/shared/config/i18n/i18nForTests'
import { Theme } from '@/shared/constants/theme'
// eslint-disable-next-line ronic-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider'

// eslint-disable-next-line ronic-plugin/layer-imports
import '@/app/styles/index.scss'

export interface ComponentRenderOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
  theme?: Theme
}

interface TestProviderProps {
  children: ReactNode
  options?: ComponentRenderOptions
}

export function TestProvider(props: TestProviderProps): any {
  const { children, options = {} } = props
  const { route = '/', initialState, asyncReducers, theme = Theme.LIGHT } = options

  return (
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState} asyncReducers={asyncReducers}>
        <I18nextProvider i18n={i18nForTests}>
          <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
              {children}
            </div>
          </ThemeProvider>
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  )
}

export function ComponentRender(component: ReactNode, options: ComponentRenderOptions = {}): any {
  return render(<TestProvider options={options}>{component}</TestProvider>)
}
