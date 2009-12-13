BOKUG = {};

YUI({
	modules: {
		'tibetan': {
			fullpath: 'tibetan.js'
		}
	}
}).use( 'console', 'node', 'tibetan', function(Y) {
	// use the console
	var c = new Y.Console({
		logSource:          Y.Global,
		useBrowserConsole:  false,
		style:              'block',
		boundingBox:        Y.one( '#console' )
	});	
	c.render();
	// end console set up *******************************************
	var
		b     = BOKUG;
	
	var t = new b.Tibetan();
	var ta = Y.one( '#textarea-node' );
	
	var initialText = ta.get( 'innerHTML' );
	
	var result = t.getComposed( initialText );
	
	debugger;
	
	ta.setContent( result );

	
	// end of app ***************************************************
});