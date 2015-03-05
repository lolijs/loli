;(function(){
    'use strict';
    var paths = {
        "loli" : "/external/root/loli",
        // "less" : "/external/less/less",
        "avalon" : "/external/avalon/avalon.shim",
        "av" : "/external/root/loli.avalon",
        "mmHistory" : "/external/avalon/mmHistory",
        "mmRouter" : "/external/avalon/mmRouter",
        "mmPromise" : "/external/avalon/mmPromise",
        "mmState" : "/external/avalon/mmState",
        "router.config" : "/src/common/router/router.config",
        "require.custom" : "/external/require/require.custom"
    };
    window.require = {
        paths:paths
    };
})();