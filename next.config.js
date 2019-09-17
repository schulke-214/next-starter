require('dotenv').config();

const path = require('path');
const Dotenv = require('dotenv-webpack');

const directory = (dir = '') => path.join(process.cwd(), dir);

module.exports = {
	webpack: config => {
		config.resolve.alias['lib'] = directory('lib');
		config.resolve.alias['components'] = directory('components');
		config.resolve.alias['functions'] = directory('functions');
		config.resolve.alias['layout'] = directory('layout');
		config.resolve.alias['~'] = directory();

		config.plugins = config.plugins || [];
		config.plugins.push(
			new Dotenv({
				path: path.join(__dirname, '.env'),
				systemvars: true
			})
		);

		return config;
	}
};
