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

    unit.style = function(url,key){
        return this.localUrl(loli.style + "!" +url,key)
    };
    unit.js = function(url,key){
        return this.localUrl(url,key);
    };
    unit.html = function(url,key){
        return require.toUrl(this.localUrl(url+".html",key));
    };
    unit.json = function(url,key){
        return require.toUrl(this.localUrl(url+".json",key));
    };
    unit.url = function(url,key){
        return require.toUrl(this.localUrl(url,key));
    };
    unit.localUrl = function(url,id){
        if(id){
            var urlArr = id.split(".");
            urlArr.pop();
            return urlArr.join("/")+"/"+url;
        }else{
            return url;
        }
    };

    window["loli"] = loli;
    return loli;
});