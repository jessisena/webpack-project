// @flow
"use strict";

module.exports = {
	//say webpack where to start looking our files
	entry: [
		"./src/index.js"
	],
	//on van els fitxers de sortida
	output: {
		path: `${__dirname}/dist`,
		publicPath: "/", //the URL to the output directory, relative to the html page
		filename: "bundle.js"
	},
	devServer: {
		contentBase: "./dist" //Where to serve the content from
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["eslint-loader"]
			}
		]
	},
	resolve: {
		extensions: [".js", ".jsx"]
	}
}
;
