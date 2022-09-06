it('Teste mais buscados', () => {
    const rx = Cypress.env('rx')
    const password = Cypress.env('USER_PASSWORD')
  
    cy.intercept('GET', '**/Manuais/*').as('Home')
    cy.visit('/Login.aspx')
    cy.get('#form1_plcRoot_Layout_zoneConteudo_Login_Login1_UserName').type(rx)
    cy.get('#form1_plcRoot_Layout_zoneConteudo_Login_Login1_Password').type(password, { log: false })
    cy.contains('input', 'Entrar').click()
    cy.wait(3000)
    cy.get('#usuario')
    cy.wait('@Home')
    cy.contains('h2','Mais Buscados').should('be.visible')
    cy.wait(1000)
    cy.contains('#document-cloud-container','form1_plcRoot_Layout_Conteudo_pageplaceholder_pageplaceholder_Layout_side_bar_NuvemBusca_pnlDocumentCloud_word_0').click()
    cy.wait(5000)
    cy.get('#filtros-segmentos', 'todos')
    cy.wait(2500)



  })
