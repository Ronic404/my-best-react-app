let currentArticleId: string

describe('Пользователь заходит на страницу статьи', () => {
  beforeEach(() => {
    cy.login()
    cy.createArticle().then(article => {
      currentArticleId = article.id
      cy.visit(`articles/${currentArticleId}`)
    })
  })

  afterEach(() => {
    cy.removeArticle(currentArticleId)
  })

  it('и видит содержимое статьи', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist')
  })

  it('и видит список рекоммендаций', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist')
  })

  it('и оставляет комментарий', () => {
    cy.getByTestId('ArticleDetails.Info')
    cy.getByTestId('AddCommentForm').scrollIntoView()
    cy.addComment('text')
    cy.getByTestId('CommentCard.Content').should('have.length', 1)
  })

  it('и ставит оценку', () => {
    cy.getByTestId('ArticleDetails.Info')
    cy.getByTestId('RatingCard').scrollIntoView()
    cy.setRate(4, 'feedback')
    cy.get('[data-selected=true]').should('have.length', 4)
  })
})
