var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    $ = require('./lib/utils'),
    app = express();

$.mongo.connect($.config.mongo, function(err) {
    if (err) {
        console.log(err);
        process.exit(0);
    } else {
        start();
    }
});

function start() {
    app.set('views', path.join(__dirname, 'lib/views'));
    app.set('view engine', 'ejs');

    app.use(bodyParser.urlencoded({
        extended: false
    }));

    app.use('/wxapi', require('./lib/routers/wxapi'));

    // create menu
    //$.wechat.createMenu(require('./lib/config/menu.json'));

    $.error('=====================================================');
    $.error('==    |-.-|    HUNGER GAME API SERVICE    |-.-|    ==');
    $.error('=====================================================');
    $.error('==    Started at ' + new Date().toUTCString() + '     ==');
    $.error('=====================================================');

    app.listen($.config.port, function(err, b) {
      console.log('running...');
    })
}
