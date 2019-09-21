const path = require('path');
const Dotenv = require('dotenv-webpack');

const directory = (dir = '') => path.join(process.cwd(), dir);

module.exports = {
	webpack: config => {
		config.resolve.alias['components'] = directory('components');
		config.resolve.alias['functions'] = directory('functions');
		config.resolve.alias['lib'] = directory('lib');
		config.resolve.alias['pages'] = directory('pages');
		config.resolve.alias['~'] = directory();

		config.plugins = config.plugins || [];
		config.plugins.push(new Dotenv());

		return config;
	}
};
