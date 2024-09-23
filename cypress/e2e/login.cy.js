describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio'); // зашла на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цвета кнопки восст. пароль
         cy.get('#mail').type('german@dolnikov.ru'); // нашла кнопку логин, ввела верный логин
         cy.get('#pass').type('iLoveqastudio1'); // нашла кнопку пароль, ввела верный пароль
         cy.get('#loginButton').click(); // нашла кнопку войти, нажала кнопку войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // после авт. виден текст
         cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден польз.
     })

     it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); // зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цвета кнопки восст. пароль
        cy.get('#forgotEmailButton').click(); // нажимаю кнопку восс. паррль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввела почту для восст.
        cy.get('#restoreEmailButton').click(); // нажимаю отправить код 
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяю на совпад. текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден польз.
    })

    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цвета кнопки восст. пароль
        cy.get('#mail').type('german@dolnikov.ru'); // нашла кнопку логин, ввела верный логин
        cy.get('#pass').type('iLoveqastudio8'); // нашла кнопку пароль, ввела НЕ верный пароль
        cy.get('#loginButton').click(); // нашла кнопку войти, нажала кнопку войти
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю на совпад. текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден польз.
    })

    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цвета кнопки восст. пароль
        cy.get('#mail').type('german@dolnikov.ru'); // нашла кнопку логин, ввела верный логин
        cy.get('#pass').type('iLoveqastudio8'); // нашла кнопку пароль, ввела НЕ верный пароль
        cy.get('#loginButton').click(); // нашла кнопку войти, нажала кнопку войти
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю на совпад. текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден польз.
    })

    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цвета кнопки восст. пароль
        cy.get('#mail').type('gorman@dolnikov.ru'); // нашла кнопку логин, ввела Неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // нашла кнопку пароль, ввела верный пароль
        cy.get('#loginButton').click(); // нашла кнопку войти, нажала кнопку войти
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю на совпад. текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден польз.
    })

    it('Валидация на наличие @', function () {
        cy.visit('https://login.qa.studio'); // зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цвета кнопки восст. пароль
        cy.get('#mail').type('germandolnikov.ru'); // нашла кнопку логин, ввела логин без @
        cy.get('#pass').type('iLoveqastudio1'); // нашла кнопку пароль, ввела верный пароль
        cy.get('#loginButton').click(); // нашла кнопку войти, нажала кнопку войти
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю на совпад. текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден польз.
    
    })

    it('Верный пароль и верный логин приведен к строчным буквам', function () {
        cy.visit('https://login.qa.studio'); // зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цвета кнопки восст. пароль
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // нашла кнопку логин, ввела верный логин
        cy.get('#pass').type('iLoveqastudio1'); // нашла кнопку пароль, ввела верный пароль
        cy.get('#loginButton').click(); // нашла кнопку войти, нажала кнопку войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // после авт. виден текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден польз.
    })
    
})

     
 
 
