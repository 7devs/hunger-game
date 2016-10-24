var mongoose = require('mongoose');

// 描述数据结构
var schema = mongoose.Schema({
  openid: String, // 用户微信的 OpenID
  nickname: String, // 昵称
  headimgurl: String, // 头像网址
  added: {type: Date, default: new Date()}, // 提交时间，比如 Mon Oct 24 2016 16:21:38 GMT+0800 (CST)
}, {
  versionKey: false,
  toObject: {
    virtuals: true
  },
  toJSON: {
    virtuals: true
  },
});

module.exports = mongoose.model('User', schema);
