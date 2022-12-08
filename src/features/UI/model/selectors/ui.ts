import { createSelector } from '@reduxjs/toolkit'

import { StateSchema } from '@/app/providers/StoreProvider'
import { ScrollSchema } from '../types/UISchema'

export const getUIScroll = (state: StateSchema): ScrollSchema => state.ui.scroll

export const getUIScrollByPath = createSelector(
  getUIScroll,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0,
)
