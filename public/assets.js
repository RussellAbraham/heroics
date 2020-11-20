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
		function ProtocolHandler(scheme, url, title){
			this.scheme = scheme;
			this.url = url;
			this.title = title;
		}
		ProtocolHandler.prototype = {
			register : function(){
				navigator.registerProtocolHandler( this.scheme, this.url, this.title );
			},
			unregister : function(){
				navigator.unregisterProtocolHandler( this.scheme, this.title );
			},
			check : function(){
				if('isProtocolHandlerRegistered' in navigator){
					alert(navigator.isProtocolHandlerRegistered( this.scheme, this.url ));
				}
			}
		};
		plugins.protocolHandler = new ProtocolHandler('web+echo','https://heroics.herokuapp.com/?echo=%s','Heroku Handler');
		if(typeof global !== 'undefined'){
			global.plugins = plugins;
		}
	});
})(this, {});