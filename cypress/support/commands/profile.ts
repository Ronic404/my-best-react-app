export const updateProfile = (firstname: string, lastname: string): void => {
  cy.getByTestId('EditableProfileCardHeader.EditButton').click()
  cy.getByTestId('ProfileCard.firstname').clear().type(firstname)
  cy.getByTestId('ProfileCard.lastname').clear().type(lastname)
  cy.getByTestId('EditableProfileCardHeader.SaveButton').click()
}

export const resetProfile = (profileId: string): Cypress.Chainable<any> => {
  return cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: 'asda' },
    body: {
      id: '4',
      first: 'test',
      lastname: 'user',
      age: 36,
      currency: 'RUB',
      country: 'Russia',
      city: 'Glazov',
      username: 'testuser',
      avatar: 'https://xakep.ru/wp-content/uploads/2020/03/278528/hacker.jpg',
    },
  })
}

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile: (firstname: string, lastname: string) => Chainable<void>
      resetProfile: (profileId: string) => Chainable<void>
    }
  }
}
