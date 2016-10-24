module.exports = {
    ports: ['{{your service port}}'], // ??? 怎么填？
    mongo: 'mongodb://localhost/game',
    secret: '{{cookie secret}}', // ???
    host: '{{http://your.host/}}', // ???
    cookie: {
        domain: '{{cookie domain}}', // ???
        path: '/',
        maxAge: 15552000000, // 6 * 30 days
        signed: true
    },
    wechat: {
        web_appid: '{{web_app_id}}', // ???
        web_secret: '{{web_app_secret}}', // ???
        web_url: 'https://open.weixin.qq.com/connect/qrconnect',
        appid: '{{app_id}}', // 应该是 http://mp.weixin.qq.com/debug/cgi-bin/sandboxinfo?action=showinfo&t=sandbox/index 这里的 appID 和 appsecret，那上面的 web_appid 和 web_secret 呢？
        secret: '{{secret}}',
        reurl: 'https://open.weixin.qq.com/connect/oauth2/authorize',
        snsurl: 'https://api.weixin.qq.com/sns/oauth2/access_token',
        apiurl: 'https://api.weixin.qq.com/cgi-bin/',
        // template: {
        //     alert: '{{template_id}}'
        // }
    },
}
