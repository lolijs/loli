;define(["av"],function(av){
    "use strict";
    var $id = "modules.menu.menu";

    // viewModel
    var vm = av.define({
        $id : $id+".vm",
        view : {
            title : {
                t1 : "hi"
            }
        }
    });

    // model
    var menuModel = av.define("Model",{
        $id : $id+".menuModel",
        // 监听 setting 变化 做ajax 请求 
        setting : {
            url : require.toUrl("modules/menu/menu.json"),
            success : function(){
                console.log("===menu===");
            } 
        }
    });
    // model
    var m2Model = av.define("Model",{
        $id : $id+".m2Model",
        // 监听 setting 变化 做ajax 请求 
        setting : {
            url : require.toUrl("modules/menu/m2.json"),
            success : function(){
                console.log("===m2===");
            } 
        }
    });

});