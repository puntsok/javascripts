YUI().use(
	'console',
	'console-filters',
	'node',
	'dd-drag',
	function(Y) {
	C = new Y.Console({
		height:            '650px',
		width:             '500px',
		collapsed:         false,
		/*logSource:         Y.Global,*/
		useBrowserConsole: false,
		newestOnTop:       false,
		plugins:           [ Y.Plugin.ConsoleFilters ],
		boundingBox:       Y.one( '#console' )
	}).render();

	var d = new Y.DD.Drag({
		node: '#console'
	});
// ********************************************************

Y.use( 'test', function(Y) {
	Y.log( 'testing module added', 'warn' );

	var testCase = new Y.Test.Case({
		name: 'FirstTestCase',
		setUp: function() {
			this.data = 1;
		},
		tearDown: function() {
			delete this.data;
		},
		// beginning of tests:
		'should be equal to 2': function() {
			Y.Assert.areEqual( this.data + 1, 2 );		
		},
		'this.data + 3 should be four': function() {
			Y.Assert.areEqual( this.data + 3, 4 );
		}
	});
	
	var suite = new Y.Test.Suite("my suite");
	suite.add( testCase );

	Y.Test.Runner.add( suite ).run();
	
});

// ********************************************************
});
                             