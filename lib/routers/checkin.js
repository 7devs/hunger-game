var router = require('express').Router(),
checkin = require('../models/checkin');

// 我只是照着 mongo-demo 抄过来的，里面完全没有正式的逻辑 - LZL

router.route('/')
// 删除数据
.delete(function(req, res, next) {
    var id = req.body.id;
    checkin.remove({_id: id}, function(err, result) {
        console.log(err, result.result);
        if(err || result.result.n === 0) {
            res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})
// 添加数据
.post(function(req, res, next) {
    checkin.create(req.body, function(err, result) {
        if(err) {
            res.render('error', {error: err});
        } else {
            res.redirect('/');
        }
    })
})
// 获取数据
.get(function(req, res, next) {
    checkin
    .find()
    .sort({added: -1})
    .limit(10)
    .exec(function(err, result) {
        res.render('index', {checkin: result});
    });
});

module.exports = router;
