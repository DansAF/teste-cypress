it('Troca de senha', () => {
    const rx = Cypress.env('rx2')
    const mail = Cypress.env('USER_email')
    //const password = Cypress.env('pass_temp')
  
    cy.intercept('GET', '**/Manuais/*').as('Manual')
    cy.visit('/Login.aspx')
    cy.contains('#form1_plcRoot_Layout_zoneConteudo_Login_Login1_lnkPasswdRetrieval','Esqueceu a senha').click()
    cy.wait(1000)
    cy.get('#form1_plcRoot_Layout_zoneConteudo_Login_ForgotPassword1_txtUsername').type(rx)
    cy.get('#form1_plcRoot_Layout_zoneConteudo_Login_ForgotPassword1_txtEmail').type(mail, { log: false })
    cy.wait(500)
    cy.contains('#form1_plcRoot_Layout_zoneConteudo_Login_ForgotPassword1_btnOk','Enviar').click()
    cy.wait(1000)
    cy.contains('#form1_plcRoot_Layout_zoneConteudo_Login_LnkBackForLogin','Voltar').click()

    cy.mailosaurGetMessage(Cypress.env('USER_email'), {
        sentTo: mail
      }).then(message => {
        const password = message.html.body.match(/\d{8}/)[0]
        cy.get('#form1_plcRoot_Layout_zoneConteudo_Login_Login1_UserName').type(rx)
        cy.get('#password').type(`${password}{enter}`)
   
    cy.wait(5000)

   // cy.contains('#form1_plcRoot_Layout_zoneConteudo_Login_Login1_LoginButton','Entrar').click()
   // cy.wait(5000)

    cy.get('#usuario')
    cy.wait(1000)
    })

  })