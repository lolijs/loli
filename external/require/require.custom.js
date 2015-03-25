;define(function(){
    'use strict';

    var config = {};
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

    config.packages = packages;

    // 如果是debug , 就去掉缓存
    require.data.debug ? config.urlArgs = "v=" + (new Date()).getTime() : "";

    require.config(config);
});