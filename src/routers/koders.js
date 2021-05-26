
const express = require('express')
const koders = require('../usecases/koders')

const authMiddlewares = require('../middlewares/auth')

const router = express.Router()

router.get('/', authMiddlewares.auth, async (request, response) => {
  try {
    const allKoders = await koders.getAll()

    response.json({
      success: true,
      message: 'All koders',
      data: {
        koders: allKoders
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: 'Error at get all koders',
      error: error.message
    })
  }
})

router.post('/', authMiddlewares.authRoles(['admin']), async (request, response) => {
  try {
    const koderCreated = await koders.create(request.body)
    response.json({
      success: true,
      message: 'koder created',
      data: {
        koder: koderCreated
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: 'Error at koder creation',
      error: error.message
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const koderDeleted = await koders.deleteById(id)

    response.json({
      success: true,
      message: 'Koder deleted',
      data: {
        koder: koderDeleted
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: 'Error at koder deletion',
      error: error.message
    })
  }
})

router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const koderUpdated = await koders.updateById(id, request.body)

    response.json({
      success: true,
      message: 'Koder updated',
      data: {
        koder: koderUpdated
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: 'Error at koder update',
      error: error.message
    })
  }
})

module.exports = router
