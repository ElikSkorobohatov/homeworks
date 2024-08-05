const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin'); // Додати цей рядок

module.exports = {
    mode: 'production', // Режим 'development' для розробки, 'production' для оптимізації
    entry: './src/index.js', // Основний файл JS
    output: {
        filename: 'bundle.js', // Ім'я вихідного файлу
        path: path.resolve(__dirname, 'dist'), // Директорія для виходу
        clean: true, // Очищення директорії перед новим збіркою
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Перевірка на JS файли
                exclude: /node_modules/, // Ігнорування залежностей
                use: {
                    loader: 'babel-loader', // Транспіляція за допомогою Babel
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.scss$/, // Перевірка на SCSS файли
                use: [
                    MiniCssExtractPlugin.loader, // Витягує CSS в окремий файл
                    'css-loader', // Обробка CSS файлів
                    'sass-loader', // Перетворення SCSS в CSS
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css', // Ім'я вихідного файлу CSS
        }),
    ],
    optimization: {
        minimizer: [
            new TerserPlugin(), // Мініфікація JS
            new CssMinimizerPlugin(), // Мініфікація CSS
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'), // Директорія для сервера
        compress: true,
        port: 9000, // Порт сервера
        watchContentBase: true, // Перезавантаження при зміні вмісту
    },
};
