/*eslint-disable*/
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	plugins: [
		new HtmlWebpackPlugin({
			title: "Output Management ",
			template: "./dist/index.html",
			inject: false,
		}),
	],
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	devtool: "inline-source-map",
	devServer: {
		static: "./dist",
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	resolve: {
		modules: ["node_modules"],
		alias: {
			src: path.join(__dirname, "./src"),
		},
		extensions: [".js", ".json", ".scss"],
	},
};
