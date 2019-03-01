const { errorGenerate } = require('./../handlers/errorHandlers')

exports.create = async (req, res) => {
	try {
		const test = req.body
		res.status(200).send(Object.assign({ test }, errorGenerate(200, 'Estamos trabajando...')))
	} catch (e) {
		res.status(500).send(errorGenerate(500, 'Error interno.'))
	}
}
exports.read = async (req, res) => {
	try {
		const test = {
			i: {
				_p: [
					{
						name: 'GLENDA',
					},
				],
				h: [
					{
						_id: '5c6195625f633f139065c42a',
						p: 237500.004444444,
						date: '2019-01-11T00:00:00.000Z',
					},
					{
						_id: '5c61af17c2b99c49282818d9',
						monto: 15000,
						fecha: '2018-11-11T00:00:00.000Z',
					},
				],
			},
			code: 200,
			message: 'Ok test',
		}
		res.status(200).send(Object.assign({ test }, errorGenerate(200, 'Estamos trabajando...')))
	} catch (e) {
		res.status(500).send(errorGenerate(500, 'Error interno.'))
	}
}
exports.update = async (req, res) => {
	try {
		const { id } = req.params
		const test = req.body
		res.status(200).send(Object.assign({ test, pathParam: id }, errorGenerate(200, 'Estamos trabajando...')))
	} catch (e) {
		res.status(500).send(errorGenerate(500, 'Error interno.'))
	}
}
