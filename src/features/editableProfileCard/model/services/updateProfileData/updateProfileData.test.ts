import { updateProfileData } from './updateProfileData'

import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

import { TestAsuncThunk } from 'shared/lib/tests/TestAsyncThunk'
import { ValidateProfileError } from '../../consts/consts'

const data = {
  id: '1',
  username: 'admin',
  age: 33,
  country: Country.Russia,
  lastname: 'Chubukov',
  first: 'Alex',
  currency: Currency.RUB,
}

describe('updateProfileData', () => {
  test('success', async () => {
    const thunk = new TestAsuncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    })

    thunk.api.put.mockReturnValue(Promise.resolve({ data }))
    const result = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })

  test('error', async () => {
    const thunk = new TestAsuncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR])
  })

  test('validate error', async () => {
    const thunk = new TestAsuncThunk(updateProfileData, {
      profile: {
        form: { ...data, lastname: '' },
      },
    })
    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
  })
})
