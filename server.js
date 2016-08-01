/**
 * Created by AllenFeng on 2016/7/4.
 */
var webpack=require('webpack');
var WebpackDevServer=require('webpack-dev-server');
var config=require('./webpack.config');

new WebpackDevServer(webpack(config),{
    publicPath:config.output.publicPath,
    historyApiFallback:true
}).listen(8000,'127.0.0.1',function (err,result) {
    if(err){
        console.log(err);
    }
    console.log('Listening at localhost:8000')
})  