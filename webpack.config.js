const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const isProduction = process.argv.indexOf('-p') !== -1;
const glob = require('glob');

const themes = glob.sync('src/themes/*.scss').map(fileName => fileName.replace(/(.+\/)|(\.scss)/g , ''));

const themeExtractors = themes.map(themeName => new ExtractTextPlugin({
	filename:function(getPath) {
		return getPath('themes/' + themeName + (isProduction ? '.min' : '') + '.css');
	}
}));

const extractCSS = new ExtractTextPlugin({
	filename:function(getPath) {
		return getPath('[name]' + (isProduction ? '.min' : '') + '.css');
	}
});

const plugins = [
	new CopyWebpackPlugin([
		{
			from:{glob:'**/*.+(html|php|json|png|svg|jpg|jpeg|gif|ttf|woff)'} ,
			context:'src' ,
			to:'[path]/[name].[ext]' ,
			transform:(fileContents , filepath) => {

				// do not process fileContents if dev mode
				if ( !isProduction ) {
					return fileContents;
				}

				// get file extension
				const fileExt = filepath.split('.').pop().toLowerCase();

				// minify HTML
				switch (fileExt) {
					case 'html':
						return HTMLMinifier.minify(fileContents.toString() , {
							collapseWhitespace:true ,
							collapseInlineTagWhitespace:true ,
							minifyCSS:true ,
							minifyJS:true ,
							removeComments:true ,
							removeRedundantAttributes:true
						});
					case 'json':
						return jsonminify(fileContents.toString());

					default:
						return fileContents;

				}

			}
		}
	] , {
		ignore:[
			{glob:'**/_*/**'} ,
			{glob:'**/_*'}
		]
	}) ,
	...themeExtractors ,
	extractCSS
];

module.exports = [

	// var export for browser environments
	{
		...(isProduction ? {} : {devtool:'source-map'}) ,
		entry:{
			'react-login-panel':[
				'./src/ReactLoginPanel.scss' ,
				...(themes.map(themeName => './src/themes/' + themeName + '.scss')) ,
				'./src/ReactLoginPanel.js'
			]
		} ,
		output:{
			path:path.resolve('./dist') ,
			filename:isProduction ? '[name].min.js' : '[name].js' ,
			library:'ReactLoginPanel' ,
			libraryTarget:'var'
		} ,
		externals:{
			'react':'React' ,
			'prop-types':'PropTypes'
		} ,
		module:{
			rules:[
				{test:/\.(jpg|png|svg)$/ , loader:'url-loader'} ,
				{test:/\.(js|jsx)$/ , loader:'babel-loader' , exclude:/node_modules/} ,
				...(themes.map((themeName , index) => ({test:new RegExp(themeName + '\.scss$') , use:themeExtractors[index].extract(['css-loader' , 'sass-loader'])}))) ,
				{test:/ReactLoginPanel\.scss$/ , loader:extractCSS.extract(['css-loader' , 'sass-loader'])}
			]
		} ,
		plugins:[
			...plugins ,
			...(isProduction ? [
				new ImageminPlugin() ,
				new OptimizeCssAssetsPlugin({
					assetNameRegExp:/\.(scss|css)$/g
				}) ,
				new UglifyJSPlugin({
					uglifyOptions:{
						compress:true ,
						output:{
							comments:false
						}
					}
				})
			] : [])
		]
	} ,

	// build as umd module
	{
		devtool:'source-map' ,
		entry:{
			'react-login-panel':'./src/ReactLoginPanel.js'
		} ,
		output:{
			path:path.resolve('./dist') ,
			filename:'[name].umd.js' ,
			library:'ReactLoginPanel' ,
			libraryTarget:'umd'
		} ,
		externals:{
			'react':'react' ,
			'prop-types':'prop-types' ,
			'object-each':'object-each'
		} ,
		plugins:[
			new ImageminPlugin()
		] ,
		module:{
			rules:[
				{test:/\.(jpg|png|svg)$/ , loader:'url-loader'} ,
				{test:/\.(js|jsx)$/ , loader:'babel-loader' , exclude:/node_modules/}
			]
		}
	} ,

	// build redux as var for browser env
	{
		devtool:'source-map' ,
		entry:{
			'react-login-panel-redux':'./src/ReactLoginPanel.redux.js'
		} ,
		output:{
			path:path.resolve('./dist') ,
			filename:'[name].js' ,
			library:'ReactLoginPanelRedux' ,
			libraryTarget:'var'
		} ,
		plugins:[
			new ImageminPlugin()
		] ,
		module:{
			rules:[
				{test:/\.(js|jsx)$/ , loader:'babel-loader' , exclude:/node_modules/}
			]
		}
	} ,

	// build redux UMD module
	{
		devtool:'source-map' ,
		entry:{
			'react-login-panel-redux':'./src/ReactLoginPanel.redux.js'
		} ,
		output:{
			path:path.resolve('./dist') ,
			filename:'[name].umd.js' ,
			library:'ReactLoginPanelRedux' ,
			libraryTarget:'umd'
		} ,
		plugins:[
			new ImageminPlugin()
		] ,
		module:{
			rules:[
				{test:/\.(js|jsx)$/ , loader:'babel-loader' , exclude:/node_modules/}
			]
		}
	}
];