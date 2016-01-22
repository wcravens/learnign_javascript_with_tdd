/* jshint expr:true */
var expect  = require( 'chai' ).expect
;

describe( 'Coercion, for better or worse, ', function() {

    it( 'is automatic for string to number', function() {
      expect( '5' == 5 ).to.equal( true );
    } );

} );

