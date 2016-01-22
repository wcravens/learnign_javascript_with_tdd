/* jshint expr:true */
var expect  = require( 'chai' ).expect
;

describe( 'this', function() {
  it( 'represents the object that contains the function that is being called', function() {
    var object1 = { propertyKey: 'value1' };
    var object2 = { propertyKey: 'value2' };
    var getPropertyKey = function() {
      return this.propertyKey;
    };
    object1.getPropertyKey = getPropertyKey;
    object2.getPropertyKey = getPropertyKey;
    expect( object1.getPropertyKey() ).to.equal( 'value1' );
    expect( object2.getPropertyKey() ).to.equal( 'value2' );
  } );
} );
