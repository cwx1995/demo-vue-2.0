const {resolve} = require('path')
const MinCssExtactPlugin = require('min-css-extact-plugin')
const OptimizeCssAssetsWebpackPlugin=require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
process.env.NODE_ENV = 'production'
//提取的公共cssloader
const commonCssLoader = [
    MinCssExtactPlugin.loader,
    'css-loader',
    {
     loader:'postcss-loader',
     options:{
        ident:'postcss',
        plugins:()=>[require('postcss-preset-env')]
        }
    }  

]
module.exports={
    entry:'./src/index.js',
    output:{
        filename:'js/built.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[...commonCssLoader]
            },
            {
                test:/\.less$/,
                use:[
                    ...commonCssLoader,
                    'less-loader'
                ]
            },
            {  //记得在packjson中配置eslintConfig
                test:/\.js$/,
                exclude:/node-modules/,
                loader:'eslint-loader',
                options:{
                    fix:true
                }
            },
            {
                test:/\.js$/,
                exclude:/node-modules/,
                loader:'babel-loader',
                options:{
                    presets:[
                        ['@babel/preset-env',{
                            useBuildIns:'usage',
                            corejs:{
                                version:3
                            },
                            target:{
                                chrome:'60',
                                ie:'9'
                            }
                        }]
                    ]
                }
            },
            {
                test:/\.(jpg|png|gif)/,
                loader:'url-loader',
                options:{
                    limit:8*1024,
                    name:'[hash:10].[ext]',
                    outputPath:'images',
                    esModule:flse
                }
            },
            {
                test:/\.html$/,
                loader:'html-loader'
            },
            {
                exclude:/\.(js|css|html|less|png|jpg|gif)/,
                loader:'file-loader',
                options:{
                    outputPath:'media'
                }
            }
        ]
    },
    plugins:[
        new MinCssExtactPlugin({
            filename:'css/built.css'
        }),
        new OptimizeCssAssetsWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            minify:{
                collapseWhitespace:true,
                removeComments:true
            }
        })
    ],
    mode:'production'
}