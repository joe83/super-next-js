const express = require('express')
const next = require('next')
const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handlePage = app.getRequestHandler()

app.prepare()
  .then(() => {
    const appServer = express()

    appServer.get('/p/:id', (request, result) => {
      const originPage = '/post'
      const queryParams = { id: `${request.params.id}` }
      app.render(request, result, originPage, queryParams)
    })

    appServer.get('*', (request, result) => {
      return handlePage(request, result)
    })

    appServer.listen(port, (err) => {
      if (err) throw err
      console.log('cyclone ready')
    })
  })
  .catch((err) => {
    console.log(err.stack)
    process.exit(1)
  })
