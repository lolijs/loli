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
        onLoad: function() {
            avalon.log("onload")
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
                onEnter : require([av.style(menuUrl),av.js(menuUrl)]),
                controller : function($ctrl) {
                    console.log("menu controller");
                    // 视图被关闭时候回调
                    $ctrl.$onBeforeUnload = function(a,b,c){
                        console.log("menu onBeforeEnter",a,b,c);
                    }
                    $ctrl.$onBeforeExit = function(){
                        console.log("menu onBeforeExit",a,b,c);
                    }
                }
                
            },
            "hint@": {
                template: "当前状态是contacts.detail.item.edit"
            }
        }
    });
});