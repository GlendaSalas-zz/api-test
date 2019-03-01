module.exports = {
	'env': {
		'node': true,
		'es6': true
	},
	'extends': 'airbnb',
	'parserOptions': {
			"ecmaVersion": 2018,
			"sourceType": "module"
	},
	'rules': {
		"no-tabs": "off",
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': "off",
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		]
	}
};
