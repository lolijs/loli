;(function(){
    'use strict';
    var paths = {
        "loli" : "/external/root/loli",
        "avalon" : "/external/avalon/avalon.shim",
        "av" : "/external/root/loli.avalon",
        "mmHistory" : "/external/avalon/mmHistory",
        "mmRouter" : "/external/avalon/mmRouter",
        "mmPromise" : "/external/avalon/mmPromise",
        "mmState" : "/external/avalon/mmState",
        "router" : "/src/common/router/router"
    };

    var map = {
        
    };

    require.config({
        paths: paths
    });

    require([
        "/external/require/require.config.js"
    ]);
})();