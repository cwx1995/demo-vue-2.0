//commonJs 语法
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extractPlugin')
const {resolve} =require('path') //引入resolve


process.env.NODE_ENV = 'development' //设置node环境为dev
module.export={
    entry:"./src/index.js", //入口文件地址
    output:{ //输出配置
        filename:'built.js',//打包输出js的名称
        path:resolve(__dirname,'build') //输出位置  根目录build文件夹下
    },
    module:{ //loader
        rules:[
            //css loader
            {
                test:/\.css$/,
                use:[
                    'style-loader',//将js中的样式文件插入style标签 并添加至head生效
                   // MiniCssExtractPlugin.loader,//取代style-loader 提取css
                   'css-loader'//将css文件转成commonjs模块加载到js中  为字符串
                ]
            },
            // less loader
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            // css image
            {
                test:/\.(png|jpg|gif)$/,
                loader:'url-loader',//下载url-loader file-loader
                options:{
                    limit:8*1024 ,//图片小于8kb会被base64处理 以减少请求数量
                    esModule:false,//关闭es6解析 为了兼容html-loader
                    name:'[hash:10].[ext]',//生成图片的名字 hash取10位 [ext]为源文件扩展名
                    outputPath:'images' //指定图片输出路径 build/images
                }
            },
            //html image
            {
                test:/\.html$/,
                loader:'html-loader'//处理html中的图片  
            },
            //其他资源 loader
            {
                exclude:/\.(css|html|js|less|png|gif|jpg)/,
                loader:'file-loader',
                options:{
                    outputPath:'media'//输出路径
                }
            }
        ]
    },
    plugins:[//插件配置
        new HtmlWebpackPlugin({
            template:'./src/index.html' //入口读取html位置
        }),
        new MiniCssExtractPlugin({
            filename:'css/built.css'//输出的文件命名
        })
    ],
    mode:'development',//模式  开发
    devServer:{ //dev配置
        contentBase:resolve(__dirname,'build'),// 目录
        compress:true,//gzip压缩
        port:3000,//端口设置
        host:'localhost',//地址配置
        open:true,//自动开启浏览器
        hot:true //热更新
    }

}