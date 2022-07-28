const path = require('path')

module.exports={
    // mode:"development"
    mode:"production",
    entry:'./src/App.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'output.js',
    },
    // loader

    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            }
        ]
    },

    // loader

    devServer:{
        // contentBase:path.join(__dirname,'dist'),
        static: './dist',
        compress:true,
        port:8080,
    }
}