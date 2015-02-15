;define(["av"],function(av){
    'use strict';
    av.state("userlist", {
        controller: "main",
        url: "/userlist",
        views: {
            "": {
                templateUrl: av.html("layout/user/userlist")
            }
        }
    });

    av.state("userdetail", {
        controller: "main",
        url: "/userdetail",
        views: {
            "": {
                templateUrl: av.html("layout/user/userdetail")
            }
        }
    });
});