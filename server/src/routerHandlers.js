import express from 'express'
import test from './test/testRoutes'

const routeHandler = express.Router()

routeHandler.use('/test', test)
routeHandler.get('/', (req, res) => {
	res.send('Sofi 1.0 <3')
})

module.exports = routeHandler
