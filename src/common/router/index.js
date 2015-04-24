;define(["av"],function(av){
    "use strict";

    var baseUrl = "layout/index/";

    var indexUrl = baseUrl + "index";
    av.state("index", {
        controller: "main",
        url: "/index",
        views: {
            "": {
                templateUrl: av.html(indexUrl),
                onEnter : require([av.style(indexUrl),av.js(indexUrl)])
            }
        }
    });

});