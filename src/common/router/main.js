;define(["av","loli"],function(av,loli){
    "use strict";
    var unit = loli.unit;

    var menuUrl = "modules/menu/menu";
    av.state("menu", {
        controller: "main",
        url: "/menu",
        views: {
            "": {
                templateUrl: unit.html(menuUrl),
                onChange : require([unit.style(menuUrl),unit.js(menuUrl)])
            }
        }
    });
});