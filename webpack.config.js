const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//подключаем плагин
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: { main: "./src/index.js"},
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'main.js',
        publicPath: ''
    },
    mode: "development",
    devServer: {
        static: path.resolve(__dirname, "./dist"),
        compress: true,
        port: 3033,
        open: true
    },
    module: {
        rules: [//rules - это массив правил
    //добавим в него объект правил для babel
{
    test: /\.js$/,//регулярное выражение, которое ищет все js файлы
    use: "babel-loader", // приобработке этих файлов нужно использовать babel-loader
    exclude:'/node_modules' //исключая папку node-modules файлы в ней обрабатывать не нужно
},
{
    test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
    type: "asset/resource"
},
{
    test: /\.css$/,
    use: [MiniCssExtractPlugin.loader, {
        loader: 'css-loader',
        options: { importLoaders: 1 }
    },
    "postcss-loader"]
},
]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin()
    ] //добавьте массив
}