const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const staticMiddleware = require('express').static

// serve content out of 'public' as is
server.use(staticMiddleware('public'))

server.use('/api', router)

server.listen(3000, () => {
    console.log('JSON Server is running')
});