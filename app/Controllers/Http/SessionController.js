'use strict'

class SessionController {
    async create({ request, auth }) {
        const { email, password } = request.all(); // Buscando Email e Senha da requisição
        
        const token = await auth.attempt(email, password) // Create Token With Email and Password

        return token // TOKEN
    }
}

module.exports = SessionController
