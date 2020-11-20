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
			s3: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1674766',

			jquery: 'https://assets.codepen.io/1674766/jquery.min',
			underscore: 'https://assets.codepen.io/1674766/underscore.min',
			backbone: 'https://assets.codepen.io/1674766/backbone.min',

			bootstrap: 'https://assets.codepen.io/1674766/util.min',
			modal: 'https://assets.codepen.io/1674766/modal.min',
			backboneModal : 'https://assets.codepen.io/1674766/modal.extension'

		}
	});

	requirejs(['backbone', 'bootstrap'], function (Backbone, bootstrap) {
		if (typeof global !== 'undefined') {
			global.plugins = plugins;
		}
	});

})(this);