// Servidor:

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send({
    altura: 'alto',
    movilidad: 'movible'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
