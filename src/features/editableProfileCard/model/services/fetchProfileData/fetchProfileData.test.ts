import { fetchProfileData } from './fetchProfileData'

import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

import { TestAsuncThunk } from 'shared/lib/tests/TestAsyncThunk'

const data = {
  username: 'admin',
  age: 33,
  country: Country.Russia,
  lastname: 'Chubukov',
  first: 'Alex',
  currency: Currency.RUB,
}

describe('fetchProfileData', () => {
  test('success', async () => {
    const thunk = new TestAsuncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ data }))
    const result = await thunk.callThunk('1')

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })

  test('error', async () => {
    const thunk = new TestAsuncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk('1')

    expect(result.meta.requestStatus).toBe('rejected')
  })
})
