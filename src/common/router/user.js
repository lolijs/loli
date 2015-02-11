;define(["av","loli"],function(av,loli){
    'use strict';
    var unit = loli.unit;
    av.state("userlist", {
        controller: "main",
        url: "/userlist",
        views: {
            "": {
                templateUrl: unit.html("layout/user/userlist")
            }
        }
    });

    av.state("userdetail", {
        controller: "main",
        url: "/userdetail",
        views: {
            "": {
                templateUrl: unit.html("layout/user/userdetail")
            }
        }
    });
});