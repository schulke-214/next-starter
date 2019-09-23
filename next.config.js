const path = require('path');
const Dotenv = require('dotenv-webpack');

const relative = (dir = '') => path.join(process.cwd(), dir);

module.exports = {
	webpack: config => {
		config.resolve.alias['components'] = relative('components');
		config.resolve.alias['functions'] = relative('functions');
		config.resolve.alias['lib'] = relative('lib');
		config.resolve.alias['pages'] = relative('pages');
		config.resolve.alias['styles'] = relative('styles');
		config.resolve.alias['~'] = relative();

		config.plugins = config.plugins || [];
		config.plugins.push(new Dotenv());

		return config;
	}
};
