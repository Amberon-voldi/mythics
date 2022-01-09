const Express = require('express')
const server = Express()

server.all('/', (req, res) => {
  res.send('Fairy Tale is Running Successfully!!')
})

function KeepAlive() {
  server.listen(3002, () => {
    console.log(`Server is Ready with Port: 3000`)
  })
}

module.exports = KeepAlive
