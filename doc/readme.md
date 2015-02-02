// 1. 标准写法

;(function(av){
    "use strict";
    var vm = av.define({
        $id : "目录名.文件名",
        view : {},
        event : {},
        model : {}
    });
})(loli.avalon);

// 构建思路
1. mvvm 渲染页面
2. 封装 define 方法; 只留出固定接口
	现有接口: $id, view, event, model
	$id : 按照 目录结构 取名, 
	view : 跟视图相关数据
	event : 事件
	model : 数据模型 , 需要后台交互的数据