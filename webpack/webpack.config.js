const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports={
    context:path.resolve(__dirname,'src'),
    entry:{
        index:'./index.js',
        print:'./print.js'
    },
    output:{
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(png|jpg|gif|svg)$/,
                use:[
                    'file-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'my webpack',
            template:'index.html',
            filename:'admin.html',
            meta:{
                viewport:'width=device-width, initial-scale=1'
            },
            favicon:path.resolve(__dirname,'logo.png'),
            minify:{
                collapseWhitespace:true,
                removeComments:true,
                removeRedundantAttributes:true,
                removeScriptTypeAttributes:true,
                removeStyleLinkTypeAttributes:true,
                removeAttributeQuotes:true
            },
            hash:false,
            chunks:['print','index'],
            chunksSortMode:'auto'
        }),
        new CleanWebpackPlugin(['dist'])
    ]
}