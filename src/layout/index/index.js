;define(["av"],function(av){
    "use strict";
    var $id = "layout.index.index";

    // viewModel
    var vm = av.define({
        $id : $id+".vm",
        view : {
            header : av.html("modules/header/h1"),
            banner : av.html("modules/banner/index")
        }
    });

    vm.scan();

});