
require('dotenv').config()

const server = require('./src/server')
const dbConnect = require('./src/lib/db')

dbConnect()
  .then(() => {
    console.log('DB Connected')
    server.listen(8080, () => {
      console.log('Server is listening')
    })
  })
  .catch(error => {
    console.error('DB Connection Error: ', error)
  })

// Reto Backend

// 1er parte
// API de dev.to
// GET /posts
// POST /posts
// GET /posts/:id

// 2da parte
// usar el API para mostrar posts en su reto de front
