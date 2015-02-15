;require(["/external/require/require.config.js?v="+new Date().valueOf()],function(){
    'use strict';

    var config = {};
    
    var paths = {
        "loli" : "/external/root/loli",
        // "less" : "/external/less/less",
        "avalon" : "/external/avalon/avalon.shim",
        "av" : "/external/root/loli.avalon",
        "mmHistory" : "/external/avalon/mmHistory",
        "mmRouter" : "/external/avalon/mmRouter",
        "mmPromise" : "/external/avalon/mmPromise",
        "mmState" : "/external/avalon/mmState",
        "rConfig" : "common/router/router.config"
    };

    var packages = [];
    if(require.data.debug){
        packages.push({
            name : "less",
            location : "/external/require",
            main : "less"
        });
    }else{
        packages.push({
            name : "css",
            location : "/external/require",
            main : "css"
        });
    }

    var map = {
        // "*": {
        //     "less": "/external/require/less"
        // }
    };

    config.paths = paths;
    config.packages = packages;

    // 如果是debug , 就去掉缓存
    require.data.debug ? config.urlArgs = "v=" + (new Date()).getTime() : "";

    require.config(config);
});