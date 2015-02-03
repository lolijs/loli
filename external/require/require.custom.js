;(function(){
    'use strict';
    var paths = {
        "loli" : "/external/root/loli",
        "avalon" : "/external/avalon/avalon.shim",
        "av" : "/external/root/loli.avalon"
    };

    require.config({
        paths: paths
    });

    require([
        "/external/require/require-config.js"
    ]);
})();