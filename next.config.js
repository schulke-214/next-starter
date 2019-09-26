const path = require('path');
const Dotenv = require('dotenv-webpack');

const relative = (dir = '') => path.join(process.cwd(), dir);

module.exports = {
	webpack: config => {
		config.resolve.modules.push(relative());

		config.plugins = config.plugins || [];
		config.plugins.push(new Dotenv());

		return config;
	}
};
