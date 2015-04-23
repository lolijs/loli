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
        	console.log("onBeforeUnload");
        },
        onBegin: function(from, to) {
            var loading = avalon.vmodels.loading
            if(loading) loading.toggle = true
        },
        onLoad: function(from, to) {
            var loading = avalon.vmodels.loading
            if(loading) loading.toggle = false
        },
        onError: function(keyname, state) {
            console.log(arguments)
            // avalon.router.navigate("/", {replace: true})
        },
        onViewEnter: function(newNode, oldNode) {
            oldNode.style.marginLeft = "-50%"
            mmState.oldNodes.push(oldNode)
            setTimeout(function() {
                oldNode.parentNode && oldNode.parentNode.removeChild(oldNode)
            }, 1000)
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