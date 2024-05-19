import app from './app.js'

const PORT = process.env.PORT || 8080

//escutar a porta 8080
app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)    
})
