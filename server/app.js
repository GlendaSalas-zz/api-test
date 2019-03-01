import 'babel-polyfill'
import express from 'express'
import bodyParser from 'body-parser'
import routeHandler from './src/routerHandlers'
import errorHandlers from './src/handlers/errorHandlers'

const port = process.env.PORT || 3000
const expressApp = express().use(bodyParser.json())
expressApp.use(bodyParser.json({ limit: '500mb' }))
expressApp.use(bodyParser.urlencoded({ limit: '500mb', extended: true }))
expressApp.use('/', routeHandler)
expressApp.use(errorHandlers.notFound)
if (expressApp.get('env') === 'development') {
	expressApp.use(errorHandlers.developmentErrors)
}
expressApp.get('*', (req, res) => {
	res.status(404).send(errorHandlers.errorGenerate(404))
})
expressApp.listen(port, () => {
	console.log(`Test api in port ${port}`)
})
