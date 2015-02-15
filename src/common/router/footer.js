;define(["av"],function(av){
    "use strict";

    var bLinksUrl = "modules/help/regist";
    av.state("helpregist", {
        controller: "main",
        url: "/helpregist",
        views: {
            "": {
                templateUrl: av.html(bLinksUrl)
            }
        }
    });
});