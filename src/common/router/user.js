;define(["av"],function(av){
    'use strict';
    av.state("userlist", {
        controller: "main",
        url: "/userlist",
        views: {
            "": {
                templateUrl: require.toUrl("layout/user/userlist.html")
            }
        }
    });

    av.state("userdetail", {
        controller: "main",
        url: "/userdetail",
        views: {
            "": {
                templateUrl: require.toUrl("layout/user/userdetail.html")
            }
        }
    });
});