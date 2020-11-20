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
		function ProtocolHandler(title, url, name){
			this.title = title;
			this.url = url;
			this.name = name;			
		}
		ProtocolHandler.prototype = {
			register : function(){
				navigator.registerProtocolHandler(
					this.title,
					this.url,
					this.name
				);
			},
			unregister : function(){
				navigator.unregisterProtocolHandler(
					this.title,
					this.name
				);
			},
			check : function(){
				if('isProtocolHandlerRegistered' in navigator){
					alert(navigator.isProtocolHandlerRegistered( this.title, this.url ));
				}
			}
		};
		// plugins.protocolHandler = new ProtocolHandler('','','');
		if(typeof global !== 'undefined'){
			global.plugins = plugins;
		}
	});
})(this, {});