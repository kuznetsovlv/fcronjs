"use strict";

const webpack = require('webpack');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV || "development";
const DEV = NODE_ENV === "development";
const TEST = NODE_ENV === "test";
const WEB = NODE_ENV === "web";
const PRODUCT = NODE_ENV === "product";

const plugins = [
	new webpack.NoErrorsPlugin(),
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify(NODE_ENV),
			DEV: JSON.stringify(DEV),
			TEST: JSON.stringify(TEST),
			WEB: JSON.stringify(WEB),
			PRODUCT: JSON.stringify(PRODUCT)
		}
	})
];

const webOutput = {filename: 'fcron.js', path: path.resolve(__dirname, 'web'), library: 'fcronjs', libraryTarget: 'var'};
const defaultOutput = {filename: 'index.js', path: path.resolve(__dirname, DEV || TEST  ? 'test' : 'dist'), library: 'fcronjs', libraryTarget: 'umd'};

const productPlugins = [
	new webpack.optimize.UglifyJsPlugin({
		compress: { warnings: false, drop_console: true, unsafe: true }
	})
];

function getExtentions () {
	const extentions = ['', '.js'];

	if (DEV || TEST)
		extentions.push('_dev.js');

	return extentions;
}

module.exports = {
	context: path.resolve(__dirname, 'src'),

	entry: 'index', //DEV || TEST ? 'index_dev' : 'index',

	noInfo: true,

	target: 'node',

	output: WEB ? webOutput : defaultOutput,

	watch: DEV,

	watchOptions: {
		aggregateTimeout: 100
	},

	devtool: DEV ? "cheap-source-map" : null,

	plugins: !DEV ? plugins.concat(productPlugins) : plugins,

	resolve: {
		modulesDirectories: ['node_modules', 'src'],
		extensions: getExtentions()
	},

	resolveLoader: {
		modulesDirectories: ['node_modules'],
		moduleTemplates: ['*-loader', '*'],
		extensions: ['', '.js']
	},

	module: {
		loaders: [{
			exclude: /node_modules/,
			test: /\.js$/,
			loader: 'babel'
		},
      {
        exclude: /node_modules/,
        test: /\.js$/,
        loader: 'eslint-loader'
      }]
	}
}
