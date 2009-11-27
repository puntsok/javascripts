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
			// do some more
		},
		
		'should show 1 + 1 is equal to 2': function() {
			Y.Assert.areEqual( this.data + 1, 2 );		
		},
		'this.data + 3 should be four': function() {
			Y.Assert.areEqual( this.data + 3, 4 );
		}
	});
	
	var test2Case = new Y.Test.Case({
		name: 'SecondTestCase',
		'This should is my second test': function() {
			Y.Assert.areEqual( 1+3, 4 );		
		}
	});
	
	var testCase3 = new Y.Test.Case({
		name: 'ThirdCaseTest',
		'should This is my third test': function() {
			Y.Assert.areEqual( 2, 2 );		
		}
	});

	var suite = new Y.Test.Suite("my suite");
	suite.add( test2Case );
	suite.add( testCase3 );
	suite.add( testCase );
	

	Y.Test.Runner.add( suite ).run();
	
});

// ********************************************************
});
