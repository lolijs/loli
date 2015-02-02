;define(function(){
    'use strict';
    var paths = {
    	"loli" : "/external/root/loli.js",
        "avalon" : "/external/avalon/avalon.js",
        "av" : "/external/root/loli.avalon.js"
    };

    require.config({
        paths: paths
    });
});