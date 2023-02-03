it('navigates', () => {
  cy.visit('/')
  cy.contains('[role=heading]', 'Home').should('be.visible')
  cy.get('[role=button][data-testid=ToInfo]').click()
  cy.contains('[role=heading]', 'Info').should('be.visible')
  cy.get('[role=button][data-testid=ToHome]').click()
  cy.contains('[role=heading]', 'Home').should('be.visible')
})
