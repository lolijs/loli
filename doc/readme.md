#标准写法

<!-- HTML部分 -->
<ul ms-controller="menu.indexmenu" >
    <li>
        {{view.title}}
    </li>
</ul>

<!-- JS部分 -->
<script type="text/javascript">
;require(["av"],function(av){
    "use strict";
    var vm = av.define({
        $id : "menu.indexmenu",
        view : {
            title : "Hello"
        },
        event : {},
        model : {}
    });
    av.scan();
});
</script>

# 构建思路
1. mvvm 渲染页面
2. 封装 define 方法; 只留出固定接口
	现有接口: $id, view, event, model
	$id : 按照 目录结构 取名, 
	view : 跟视图相关数据
	event : 事件
	model : 数据模型 , 需要后台交互的数据
3. 封装model层, 让数据自动提交
