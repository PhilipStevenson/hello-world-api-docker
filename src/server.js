const express = require('express')

const getHelloWorldMessage = require('./getHelloWorldMessage')

const app = express()
const port = process.env.HELLO_WORLD_API_PORT || 3000

app.get('/', (request, response) => {
  response.send(getHelloWorldMessage())
})

app.listen(port)

console.log(`Server running on port ${port}`)
