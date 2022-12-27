import * as commonCommands from './commands/common'
import * as ratingCommands from './commands/rating'
import * as articleCommands from './commands/article'
import * as profileCommands from './commands/profile'
import * as commentsCommands from './commands/comments'

Cypress.Commands.addAll(commonCommands)
Cypress.Commands.addAll(ratingCommands)
Cypress.Commands.addAll(articleCommands)
Cypress.Commands.addAll(profileCommands)
Cypress.Commands.addAll(commentsCommands)
