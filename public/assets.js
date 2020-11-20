(function (global) {

	const plugins = {
		Models: {},
		Collections: {},
		Views: {},
		Routes: {}
	};

	requirejs.config({
		baseUrl: '',
		shim: {
			underscore: {
				exports: '_'
			},
			backbone: {
				deps: ['underscore', 'jquery'],
				exports: 'Backbone'
			}
		},
		paths: {
			cdn: 'https://assets.codepen.io/1674766',
			jquery: 'https://assets.codepen.io/1674766/jquery.min',
			underscore: 'https://assets.codepen.io/1674766/underscore.min',
			backbone: 'https://assets.codepen.io/1674766/backbone.min',
			bootstrap: 'https://assets.codepen.io/1674766/util.min',
			s3: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1674766',
		}
	});

	requirejs([ 'backbone', 'bootstrap', 'cdn/modal.min', 'cdn/modal.extension' ], function (Backbone, bootstrap, modal, extension) {
		if (typeof global !== 'undefined') {
			global.plugins = plugins;
		}
	});

})(this);