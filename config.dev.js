const path = require('path')

module.exports={
    // mode:"development"
    mode:"production",
    entry:'./src/App.js',
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
}