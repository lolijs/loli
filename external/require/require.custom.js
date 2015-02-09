;require(["/external/require/require.config.js?v="+new Date().valueOf()],function(){
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
        "router.config" : "/src/common/router/router.config"
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

    require.config({
        paths : paths,
        packages : packages
    });
});