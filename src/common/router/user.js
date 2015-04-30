;define(["av"],function(av){
    'use strict';

    var baseUrl = "layout/user/";

    var indexUrl = baseUrl + "index";
    av.state("user", {
        controller: "main",
        url: "/user",
        views: {
            "": {
                templateUrl: av.html(indexUrl),
                onEnter : require([av.js(indexUrl)])
            }
        }
    }).state("userdetail", {
        controller: "main",
        url: "/userdetail",
        views: {
            "": {
                templateUrl: av.html("layout/user/userdetail")
            }
        }
    });
});