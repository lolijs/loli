;define(function(){
    'use strict';

    // 系统需要的router
    var routerList = [
        "main",
        "user",
        "footer"
    ];

    var i,resList=[],baseurl="common/router/";

    for(i in routerList){
        resList.push(baseurl+routerList[i]);
    }
    return resList;
});