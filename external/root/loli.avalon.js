;define(["loli","mmState"],function(loli,av){
    "use strict";
    // 配置
    {
       avalon.config({loader: false});
    }

    // 定义
    {
        loli.avalon = {};
        avalon.mix(loli.avalon,av,loli.unit);
        console.log("loli.avalon",loli.avalon);
    }

    // Model 工厂
    var MFactory = function(param){
        var self = this,
            setting = {
                $id : param.$id,
                setting : param.setting,
                data : param.data || {},
                get : self.get,
                post : self.post
            },key;

        for(key in setting){
            self[key] = setting[key];
        }
    };
    MFactory.prototype = {
        constructor : MFactory,
        init : function(vm){
            this.vm = vm;
            this.get();
        },
        get : function(){
            var vm = this.vm;
            var param = vm.setting.$model;
            
            var setting = {
                type : "get",
                dataType : "json"
            };
            setting = avalon.mix(setting,param);

            setting.success = function(json){
                var dd,key,obj,$model;
                if(json && json.res == 1){
                    // 替换model, 必须从新赋值model, 否则无法触发监听
                    vm.data = json.data;
                    
                    // 回调
                    if(param.success && typeof param.success == "function"){
                        param.success(json.data);
                    }
                }
            }

            return $.ajax(setting);
        },
        post : function(){
            var setting = this.setting.$model;
            var data = JSON.stringify(this.data.$model);
            console.log("this",this,data);
            var _setting = {
                type : "post",
                data : data
            },key;
            for(key in setting){
                _setting[key] = setting[key];
            }
            console.log("setting",_setting);
            $.ajax(_setting);
        }
    };

    // VM工厂
    var VMFactory = function(param){
        var self = this,
            setting = {
                $id : param.$id,
                view : param.view,
                events : param.events || {}
            },key;

        for(key in setting){
            self[key] = setting[key];
        }
    };
    VMFactory.prototype = {
        constructor : VMFactory
    };
    
    // define 工厂
    loli.avalon.define = function(flag,param){
        var setting = {},_id,_el;
        if(typeof flag == "object"){
            param = flag;
            setting = new VMFactory(param);
            console.log("v",setting);
        }else if(flag == "Model"){
            setting = new MFactory(param);
        }

        // 设置 el
        {
            _id = setting.$id;
            setting.$el = "";
            _el = $("[ms-controller='"+_id+"']");
            if(_el && _el.length > 0){
                setting.$el = _el;
            }
        }

        {
            setting.scan = function(elem,vmodel){
                var self = this,_self;
                console.log("setting.$el",setting.$el);
                if(setting.$el){
                    setting.$el.each(function(){
                        av.scan(this,self);
                    });    
                }
            }
        }

        var vm = av.define(setting);
        // 加载 model 的数据
        //model.create(vm,param.model);
        if(flag == "Model"){
            setting.init(vm);
        }
        return vm;
    };

    return loli.avalon;
});