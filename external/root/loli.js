;define(function(){
    "use strict";
    var loli = {};

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

    window["loli"] = loli;
    return loli;
});