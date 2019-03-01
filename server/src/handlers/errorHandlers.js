exports.notFound = (req, res, next) => {
	const err = new Error('Not Found')
	err.status = 404
	return {
		code: err.status,
		description: 'Not acceptable',
		error: err.message,
	}
}
exports.notAcceptable = (req, res, next) => {
	const err = new Error('Not acceptable')
	err.status = 406
	return {
		code: err.status,
		description: 'Not acceptable',
		error: err.message
	}
}
exports.errorGenerate = (error, message = '') => {
	var description = message
	if (error === 200) {
		message ='Petición exitosa.'
	} else if (error === 302) {
		message = 'Encontrado: Se encontraron los recursos solicitados.'
	} else if (error === 400) {
		message = 'Petición incorrecta: Error interno'
	} else if (error === 401) {
		message = 'Sin autorización: Usted no tiene permisos para realizar la acción. '
	} else if (error === 404) {
		message = 'No encontrado: El recurso solicitado no fue encontrado.'
	} else if (error === 406) {
		message = 'No aceptables: Los Parametros enviados no son correctos o invalidos. '
	} else if (error === 500) {
		message = 'Error interno del servidor.'
	}
	return {
		code: error,
		message,
		description,
	}
}
exports.errorGenerate_= (error, message)=>{
	return {
		code: error,
		message,
	}
}
exports.developmentErrors = (err, req, res) => {
	err.stack = err.stack || ''
	const errorDetails = {
		message: err.message ? err.message : 'Error interno dev.',
		status: err.status ? err.status : 500,
		stackHighlighted: err.stack.replace(/[a-z_-\d]+.js:\d+:\d+/gi, '<mark>$&</mark>'),
	}
	// console.log(errorDetails,'~~~~~~~~~~~~~~~~~~~~************************\n\n');
	// // res.status(err.status || 500);
	// res.format({'text/html': () => {
	// 	res.render('error', errorDetails);
	// }, // Form Submit, Reload the page
	// 'application/json': () => res.json(errorDetails) // Ajax call, send JSON back
	//
	// });
	return {
		errorDetails,
	}
}
