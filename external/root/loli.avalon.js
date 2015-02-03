;define(["loli","avalon"],function(loli,av){
    "use strict";
    // 配置
    avalon.config({loader: false});

    loli.avalon = {};
    avalon.mix(loli.avalon,av);

    loli.avalon.define = function(param){
        var setting = {};
        // 只接收 固定的参数;
        var attrId = setting.$id = param.$id;
        setting.view = param.view;
        setting.model = param.model;
        setting.event = param.event;
        setting.$el = "";

        var el = $("[ms-controller='"+attrId+"']:first");
        if(el && el.length > 0){
            console.log("el",el);
            setting.$el = el[0];
        }

        
        var mm = av.define(setting);
        // 对model 做封装
        mm.model.sent = function(url,data){
            data = data || this.$model;
            console.log(url,data);
            $.ajax({
                url : url,
                data : data
            });
        };

        mm.scan = function(elem,vmodel){
            var self = this;
            av.scan(setting.$el,this);
        }
        return mm;
    };

    return loli.avalon;
});