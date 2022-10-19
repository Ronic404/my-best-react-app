import { FC } from 'react'
import { Provider } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ReducersMapObject } from '@reduxjs/toolkit'

import { StateSchema } from '../config/StateSchema'
import { createReduxStore } from '../config/store'

interface IStoreProviderProps {
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider: FC<IStoreProviderProps> = ({
  children,
  initialState,
  asyncReducers,
}) => {
  const navigate = useNavigate()

  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
    navigate,
  )

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
