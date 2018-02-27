const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handlePage = app.getRequestHandler()

app.prepare()
  .then(() => {
    const appServer = express()

    appServer.get('/p/:slug', (request, result) => {
      const originPage = '/post'
      console.log(request.params)
      const queryParams = { slug: `Dynamic from slug: ${request.params.slug}` }
      app.render(request, result, originPage, queryParams)
    })

    appServer.get('*', (request, result) => {
      return handlePage(request, result)
    })

    appServer.listen(5000, (err) => {
      if (err) throw err
      console.log('cyclone ready')
    })
  })
  .catch((err) => {
    console.log(err.stack)
    process.exit(1)
  })
