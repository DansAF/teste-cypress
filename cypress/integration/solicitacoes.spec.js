it('Teste acesso solicitações', () => {
    const rx = Cypress.env('rx')
    const password = Cypress.env('USER_PASSWORD')
  
    cy.intercept('GET', '**/Manuais/*/solicitacoes.aspx').as('solicitacoes')
    cy.visit('/Solicitacoes.aspx')
  
    cy.get('#form1_plcRoot_Layout_zoneConteudo_Login_Login1_UserName').type(rx)
    cy.get('#form1_plcRoot_Layout_zoneConteudo_Login_Login1_Password').type(password, { log: false })
    cy.contains('input', 'Entrar').click()
  
  
    cy.wait(3000)
    //cy.get('#form1_plcRoot_Layout_Conteudo_pageplaceholder_pageplaceholder_Layout_zoneMain_pageplaceholder_pageplaceholder_Layout_conteudo_pageplaceholder_pageplaceholder_Layout_zoneMain_Request_Requests_lnkNew', 'Nova').click()
   //cy.wait(1000)
   // cy.get('#form1_plcRoot_Layout_Conteudo_pageplaceholder_pageplaceholder_Layout_zoneMain_RequestNew_Requests_lkbBack').click()
   // cy.wait(1000)
   // cy.wait('@solicitacoes')
    cy.contains('h5','Solicitações').should('be.visible')
    cy.wait(1000)
  })