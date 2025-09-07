const express = require('express')
const app = express()
const port = 3000;
const router = require('./src/route/routes')


app.use(express.json())
app.use('/', router)

app.get('/', (req, res) => {
    res.send(`API is Running port: ${port}`)
})

app.listen(port, () => {
    console.log(`Servidor Ligado: http://localhost:${port}`);
})