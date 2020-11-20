(function(global, plugins){
	requirejs.config({
		baseUrl : '',
		paths : {  
			cdn : 'https://assets.codepen.io/1674766',
			jquery : 'https://assets.codepen.io/1674766/jquery.min',
			bootstrap : 'https://assets.codepen.io/1674766/util.min',
			s3 : 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1674766',
		}
	});
	requirejs([ 'jquery', 'bootstrap' ], function($, bootstrap){
		if(typeof global !== 'undefined'){
			global.plugins = plugins;
		}
	});
})(this, {});