let profileId: string

describe('Пользователь заходит на страницу профиля', () => {
  beforeEach(() => {
    cy.visit('')
    cy.login().then(data => {
      profileId = data.id
      cy.visit(`profile/${profileId}`)
    })
  })

  afterEach(() => {
    cy.resetProfile(profileId)
  })

  it('и профиль успешно загружается', () => {
    cy.getByTestId('ProfileCard.firstname').should('have.value', 'test')
  })

  it('и редактирует его', () => {
    const newName = 'new'
    const newLastname = 'lastname'
    cy.updateProfile(newName, newLastname)
    cy.getByTestId('ProfileCard.firstname').should('have.value', newName)
    cy.getByTestId('ProfileCard.lastname').should('have.value', newLastname)
  })
})
