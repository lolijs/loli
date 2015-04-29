;define(["av"],function(av){
    "use strict";
    var $id = "layout.index.index";
    var idArr = $id.split(".");
    idArr.pop();
    var baseUrl = idArr.join("/")+"/";

    // viewModel
    var vm = av.define({
        $id : $id+".vm",
        view : {
            toUrl : function(u){
                var uu = require.toUrl(baseUrl+u);
                console.log("uuuuuuuuuuuuuu",uu);
                return uu;
            },
            baseUrl : baseUrl,
            header : {
                h1 : "网站logo"
            },
            header : av.html("modules/header/h1")
        }
    });

    // model
    var i1Model = av.define("Model",{
        $id : $id+".i1Model",
        // 监听 setting 变化 做ajax 请求 
        setting : {
            url : require.toUrl(baseUrl+"index.json"),
            success : function(){
                console.log("===menu===");
            } 
        }
    });

    vm.scan();

});