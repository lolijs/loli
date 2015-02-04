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
        model.create = function(vm,models,data){
            // 如果没有设置 models 和 data 就退出
            if(!models && !data) return false;
            
            var self = this;
            var _model,key,_success,_param={};
            // 循环遍model集合
            for(key in models){
                _model = models[key];
                _model.custom = {
                    vm : vm,
                    key : key
                };
                // 配置好参数
                avalon.mix(_param,_model);
                // 请求数据
                self.get(_param);
            }
        };

        // 发送请求
        model.post = function(url,data){
            data = data || this.$model;
            $.ajax({
                type : "post",
                url : url,
                data : data
            });
        };

        // 获取数据
        model.get = function(param){
            var vm = this;
            var setting = {
                type : "get",
                dataType : "json"
            };
            setting = avalon.mix(setting,param);

            setting.success = function(json){
                var dd,key,obj,$model;
                if(json && json.res == 1){
                    // 替换model, 必须从新赋值model, 否则无法触发监听
                    {
                        // model 对应的 key
                        key = setting.custom.key;
                        obj = {};
                        // model 原始数据
                        $model = setting.custom.vm.model.$model;
                        // 获取最新数据
                        obj[key] = json.data;
                        // 综合现有数据
                        avalon.mix(obj,$model);
                        // 替换整个model 触发监听
                        setting.custom.vm.model = obj;    
                    }
                    
                    // 回调
                    if(param.success && typeof param.success == "function"){
                        param.success(json.data);
                    }
                }
            }

            return $.ajax(setting);
        };

    }
    


    // define 工厂

    loli.avalon.define = function(param){
        var setting = {};
        // 只接收 固定的参数;
        var attrId = setting.$id = param.$id;

        setting.view = param.view || {};
        // 默认给空, 显示声明 model 为 空对象
        setting.model = {};
        setting.event = param.event || {};
        setting.$el = "";

        var el = $("[ms-controller='"+attrId+"']:first");
        if(el && el.length > 0){
            setting.$el = el[0];
        }

        var vm = av.define(setting);
        // 加载 model 的数据
        model.create(vm,param.model);

        vm.scan = function(elem,vmodel){
            var self = this;
            av.scan(setting.$el,this);
        }
        return vm;
    };

    return loli.avalon;
});