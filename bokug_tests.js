YUI().use(
	'console',
	'console-filters',
	'node',
	'dd-drag',
	function(Y) {
	C = new Y.Console({
		height:            '650px',
		width:             '500px',
		collapsed:         true,
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
		'should show 1 + 1 is equal to 2': function() {
			Y.Assert.areEqual( 1+1, 2 );		
		}
	});

	Y.Test.Runner.add( testCase );
	Y.Test.Runner.run();

});

// ********************************************************
});
