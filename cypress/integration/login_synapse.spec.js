it('Teste de Login no Synapse', () => {
    const rx = Cypress.env('rx')
    const password = Cypress.env('USER_PASSWORD')
  
    cy.intercept('GET', '**/Manuais/*').as('Manual')
    cy.visit('/Login.aspx')
    cy.get('#form1_plcRoot_Layout_zoneConteudo_Login_Login1_UserName').type(rx)
    cy.get('#form1_plcRoot_Layout_zoneConteudo_Login_Login1_Password').type(password, { log: false })
    cy.contains('input', 'Entrar').click()
    cy.wait(3000)
    cy.get('#usuario')
    cy.wait(1000)
  })

 