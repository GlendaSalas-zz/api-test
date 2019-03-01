import express from 'express'

const testController = require('./testController')

const router = express.Router()


router.post('/', testController.create)
router.get('/', testController.read)
router.patch('/:id', testController.update).patch('/')

module.exports = router
