var mongoose = require('mongoose');

// 描述数据结构
var schema = mongoose.Schema({
  openId: String, // 用户的微信 OpenID
  before: {type: Number, default: 0}, // 饭前饥饿度 0 ~ 10, 10为最饥饿
  after: {type: Number, default: 0}, // 饭后饱腹度 0 ~ 10, 10为最饱腹
  added: {type: Date, default: new Date()}, // 提交时间，比如 Mon Oct 24 2016 16:21:38 GMT+0800 (CST)
}, {
  toObject: {
    virtuals: true
  },
  toJSON: {
    virtuals: true
  },
});

module.exports = mongoose.model('Checkin', schema);
