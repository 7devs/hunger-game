var crypto = require('crypto');
var config = require('./config');
var wechat = require('./wechat');

module.exports.md5 = function(str) {
    return crypto.createHash('md5').update(str.toString()).digest('hex');
};

module.exports.base64 = function(str) {
    return Buffer(str.toString()).toString('base64');
};

wechat(config.wechat);
module.exports.wechat = wechat;

module.exports.path = require('path');

module.exports.mongo = require('./mongo');

module.exports.config = config;
