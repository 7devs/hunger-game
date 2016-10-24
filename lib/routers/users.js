var router = require('express').Router(),
    user = require('../models/user.js'),
    url = require('url'),
    $ = require('../utils');


    router.route('/')
    .get(function(req, res, next) {
        var code = req.query.code;
        if(code) {
            // oauth base
            $.wechat.getOpenidByCode(req.query.code, function(data) {
                // get user info
                user.findOne({openid: data.openid}, function(err, result) {
                    // save user info
                    req.session.fun = data.openid;
                    res.redirect('/users/info');
                })
            });
        } else {
            // oauth
            var weconf = $.config.wechat,
                urlobj = url.parse(weconf.reurl);
            urlobj.query = {
                appid: weconf.appid,
                redirect_uri: url.format({
                    protocol: req.protocol,
                    host: req.hostname,
                    pathname: req.originalUrl
                }),
                response_type: 'code',
                scope: 'snsapi_base'
            };
            urlobj.hash = 'wechat_redirect';
            res.redirect(url.format(urlobj));
        }
    });


    router.route('/')
    .post(function(req, res, next) {
        var myid = req.session.fun,
            data = req.body;
          });

    router.route('/info')
    .get(function(req, res, next) {
        res.render('这里是一个模板');
    });


module.exports = router;
