;define(["av","modules/menu/menu"],function(av,menu){
    "use strict";

    var menuUrl = "modules/menu/menu";

    console.log("menu url!!",av.html(menuUrl));

    avalon.state.config({
        // 全局的onBeforeUnload
        onBeforeUnload: function(from, to) {
            console.log("onBeforeUnload");
        },
        onAbort: function(from, to) {
            console.log("onAbort");
        },
        onBegin: function(from, to) {
            console.log("onBegin");
        },
        onLoad: function(from, to) {
            console.log("onLoad");
        },
        onError: function(keyname, state) {
            console.log("onError");
        },
        onViewEnter: function(newNode, oldNode) {
            console.log("onViewEnter");
        },
        onUnload: function() {
            avalon.log("unload")
        }
    })

    av.state("menu", {
        controller: "main",
        url: "/menu",
        views: {
            "": {
                templateUrl: av.html(menuUrl),
                onEnter : require([av.style(menuUrl),av.js(menuUrl)])
            }
        }
    });

});