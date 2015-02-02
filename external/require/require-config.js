;define(function(){
    'use strict';
    //请确保modules第一个被赋值
	var modules = {},
		//请确保srcRoot第二个被赋值
		srcRoot = 'src/',
		//请确保productRoot第三个被赋值
		productRoot = 'build/',
		//请确保siteVersion第四个被赋值
		siteVersion = "1.0.177",
		//请确保debug第五个被赋值
		debug = false,
		prefix = '/',
		cfg = {
			baseUrl: prefix + srcRoot
		};
	if (!debug) {
		for (var n in modules) {
			modules[n] = prefix + productRoot + n + '/' + modules[n];
		}
		cfg.paths = modules;
	}
	require.config(cfg);
	//用于外部访问的基本信息
	require.data = {
		siteVersion: siteVersion,
		debug: debug
	};
	//若需要从外部获得模块路径请使用require.toUrl('family/name')
});