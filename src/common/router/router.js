;define(["av"],function(av){
	
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

    av.state("menu", {
        controller: "main",
        url: "/menu",
        views: {
            "": {
                templateUrl: require.toUrl("modules/menu/menu.html"),
                onAfterLoad : require(["modules/menu/menu"])
            }
        }
    });



    // 启动路由
    av.history.start();
});