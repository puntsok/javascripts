YUI().use("base", function(Y) {
	
	// shortcuts:
	var
		l = Y.Lang;
	
	// local variables:
	
	function TibetanInput( config ) {
		TibetanInput.superclass.constructor.apply( this, arguments );
	}
	TibetanInput.NAME = 'tibetan-input';
	TibetanInput.ATTRS = {
		
		version: {
			value: 1.0,
			readOnly: false,
			validator: function( val ) {
				return l.isNumber( val );
			}		
		}
		
	};
	
	Y.extend( TibetanInput, Y.Base, {
		// methods
	});
	
	bokug.TibetanInput = TibetanInput;
	
});
	
