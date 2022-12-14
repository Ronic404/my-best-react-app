import { User } from '../../../src/entities/User/model/types/user'
import { USER_LS_KEY } from '../../../src/shared/constants/localStorage'
import { selectByTestId } from 'cypress/helpers/selectByTestId'

export const login = (username: string = 'testuser', password: string = '123'): Cypress.Chainable<void> => {
  return cy.request({
    method: 'POST',
    url: 'http://localhost:8000/login',
    body: {
      username,
      password,
    },
  }).then(({ body }) => {
    window.localStorage.setItem(USER_LS_KEY, JSON.stringify(body))
    return body
  })
}

export const getByTestId = (testId: string): Cypress.Chainable<JQuery<HTMLElement>> => {
  return cy.get(selectByTestId(testId))
}

declare global {
  namespace Cypress {
    interface Chainable {
      login: (username?: string, password?: string) => Chainable<User>
      getByTestId: (testId: string) => Chainable<JQuery<HTMLElement>>
    }
  }
}
