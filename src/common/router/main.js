;define(["av"],function(av){
    "use strict";

    var menuUrl = "modules/menu/menu";

    console.log("menu url!!",av.html(menuUrl));
    av.state("menu", {
        controller: "main",
        url: "/menu",
        views: {
            "": {
                templateUrl: av.html(menuUrl),
                onChange : require([av.style(menuUrl),av.js(menuUrl)])
            }
        }
    });
});