;define(["loli","avalon"],function(loli,av){
    "use strict";
    // 配置
    {
       avalon.config({loader: false});
    }

    // 定义
    {
        loli.avalon = {};
        avalon.mix(loli.avalon,av);    
    }

    // model 工厂
    {
        var model = loli.avalon.model = {};
        model.create = function(vm,data){
            var self = this;
            if(data){
                vm.model = data
            }
            vm.model.$sent = this.sent;
            vm.model.$get = function(param){
                self.get.call(vm,param);   
            }
            console.log("model",vm.model);
        };

        // 发送请求
        model.sent = function(url,data){
            data = data || this.$model;
            $.ajax({
                url : url,
                data : data
            });
        };

        // 获取数据
        model.get = function(param){
            var vm = this;
            var setting = {
                dataType : "json"
            };
            setting = avalon.mix(param,setting);

            setting.success = function(json){
                var dd,key;
                if(json && json.res == 1){
                    // 从新创建 model
                    model.create(vm, json.data);
                    if(param.success && typeof param.success == "function"){
                        param.success();
                    }
                }
            }

            $.ajax(setting);
        };

    }
    


    // define 工厂

    loli.avalon.define = function(param){
        var setting = {};
        // 只接收 固定的参数;
        var attrId = setting.$id = param.$id;
        // 
        setting.view = param.view || {};
        setting.model = param.model || {};
        setting.event = param.event || {};
        setting.$el = "";

        var el = $("[ms-controller='"+attrId+"']:first");
        if(el && el.length > 0){
            setting.$el = el[0];
        }

        
        var vm = av.define(setting);
        // 构建vm的model 对象
        model.create(vm);

        vm.scan = function(elem,vmodel){
            var self = this;
            av.scan(setting.$el,this);
        }
        return vm;
    };

    return loli.avalon;
});