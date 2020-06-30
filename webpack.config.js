const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	plugins: [new VueLoaderPlugin()],
	module: {
		rules: [
			{
				test: /\.vue$/,
				exclude: /\/node_modules/,
				use: {
					loader: 'vue-loader',
					options: {
						prettify: false
					}
				}
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true
					}
				}
			}
		]
	}
};
