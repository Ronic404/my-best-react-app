import { USER_LS_KEY } from '../../../src/shared/constants/localStorage'

export const login = (username: string = 'testuser', password: string = '123'): void => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:8000/login',
    body: {
      username,
      password,
    },
  }).then(({ body }) => {
    window.localStorage.setItem(USER_LS_KEY, JSON.stringify(body))
  })
}
