
(function (para) {
    var p = para.sdk_url, n = para.name, w = window, d = document, s = 'script', x = null, y = null;
    w['sensorsDataAnalytic201505'] = n;
    w[n] = w[n] || function (a) { return function () { (w[n]._q = w[n]._q || []).push([a, arguments]); } };
    var ifs = ['track', 'quick', 'register', 'registerPage', 'registerOnce', 'clearAllRegister', 'trackSignup', 'trackAbtest', 'setProfile', 'setOnceProfile', 'appendProfile', 'incrementProfile', 'deleteProfile', 'unsetProfile', 'identify', 'login', 'logout', 'trackLink', 'clearAllRegister'];
    for (var i = 0; i < ifs.length; i++) {
        w[n][ifs[i]] = w[n].call(null, ifs[i]);
    }
    if (!w[n]._t) {
        x = d.createElement(s), y = d.getElementsByTagName(s)[0];
        x.async = 1;
        x.src = p;
        w[n].para = para;
        y.parentNode.insertBefore(x, y);
    }
})({
    name: 'sensors',
    server_url: 'https://dmp.sinopac.com/DMP_SA/API/',
    sdk_url: 'https://dmp.sinopac.com/DMP_SA/SDK/Scripts/sensorsdata.min.securejs',
    heatmap_url: 'https://dmp.sinopac.com/DMP_SA/SDK/Scripts/heatmap.min.securejs',
    send_type: 'beacon',
    use_client_time: true,

    heatmap: {
        clickmap: 'default',
        scroll_notice_map: 'default',
        collect_tags: {
            div: {
                max_level: 3
            },
            li: true
        }
    },

    show_log: false,
    is_track_single_page: false,
    app_js_bridge: true,
    use_app_track: true,
    is_secure_cookie: true

});

var sPlatform = '';
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    sPlatform = 'iOS';
} else if (/(Android)/i.test(navigator.userAgent)) {
    sPlatform = 'Android';
} else {
    sPlatform = 'PC';
}

sensors.registerPage({
    is_login: false,
    platform: sPlatform,
    product: '銀行官網'
});

sensors.quick('autoTrack');
