module.exports = ({ config }) => {
	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		use: [
			{
				loader:  require.resolve('babel-loader'),
				options: {
					presets: ['@babel/preset-env', "@babel/preset-react"]
				}
			},
			{
				loader: require.resolve('awesome-typescript-loader'),
			},		
		],
	});

	config.resolve.extensions.push('.ts', '.tsx');
	return config;
};