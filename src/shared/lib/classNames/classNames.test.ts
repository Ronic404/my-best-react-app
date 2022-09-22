import { classNames } from './classNames'

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass')
  })

  test('with additional class', () => {
    expect(classNames('someClass', {}, ['additional'])).toBe('someClass additional')
  })

  test('with mods', () => {
    expect(classNames('someClass', { yes: true, no: false }, ['additional'])).toBe('someClass additional yes')
  })
})
