const jsonServer = require('json-server')
const server = jsonServer.create()
// const router = jsonServer.router('./api.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
// server.use(router)
// Add custom routes before JSON Server router
server.post('/api/token', (req, res) => {
  res.json('Testing token from server')
})
server.listen(3000, () => {
  console.log('JSON Server is running')
})