import { StateSchema } from 'app/providers/StoreProvider'

import { getProfileForm } from './getProfileForm'

import { Country } from '../../../../../entities/Country'
import { Currency } from '../../../../../entities/Currency'

describe('getProfileForm', () => {
  test('should return form', () => {
    const form = {
      username: 'admin',
      age: 33,
      country: Country.Russia,
      lastname: 'Chubukov',
      first: 'Alex',
      currency: Currency.RUB,
    }

    const state: DeepPartial<StateSchema> = {
      profile: {
        form,
      },
    }
    expect(getProfileForm(state as StateSchema)).toEqual(form)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileForm(state as StateSchema)).toEqual(undefined)
  })
})
