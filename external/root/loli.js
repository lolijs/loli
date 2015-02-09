;define(function(){
    "use strict";
    var loli = {};
    loli.debug = require.data.debug;
    loli.style = loli.debug ? "less" : "css";

    var unit = loli.unit = {};
    unit.hashToUrl = function(hash){
    	hash = hash || location.hash;
    	var flag = ["#!/","#/"],i,f,fl,hl;
    	for(i in flag){
    		f = flag[i];
    		fl = f.length;
    		hl = hash.length;
    		if(hl > fl && hash.indexOf(f) == 0){
    			return require.toUrl(hash.substr(fl,hl));
    		}
    	}
    };

    unit.style = function(url){
        return loli.style + "!" +url;
    };
    unit.js = function(url){
        return url;
    };
    unit.html = function(url){
        return require.toUrl(url+".html");
    };

    window["loli"] = loli;
    return loli;
});