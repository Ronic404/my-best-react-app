import { validateProfileData } from './validateProfileData'

import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

import { ValidateProfileError } from '../../types/profile'

const data = {
  username: 'admin',
  age: 33,
  country: Country.Russia,
  lastname: 'Chubukov',
  first: 'Alex',
  currency: Currency.RUB,
}

describe('validateProfileData', () => {
  test('success', async () => {
    const result = validateProfileData(data)
    expect(result).toEqual([])
  })

  test('without lastname', async () => {
    const result = validateProfileData({ ...data, lastname: '' })
    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
  })

  test('incorrect age', async () => {
    const result = validateProfileData({ ...data, age: 0 })
    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
  })

  test('incorrect country', async () => {
    const result = validateProfileData({ ...data, country: undefined })
    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY])
  })

  test('incorrect all', async () => {
    const result = validateProfileData({})
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ])
  })
})
