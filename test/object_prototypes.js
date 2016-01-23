/* jshint expr:true */
var expect  = require( 'chai' ).expect
;

describe( "Object Prototypes", function(){
  describe( "The default Object.prototype", function() {
  } );

  var myObject;
  beforeEach( function() {
    myObject = { myProperty: 'value' };
  } );

  it( "object literals are automatically linked to the 'Object.prototype'", function(){
    expect( myObject ).to.have.property( 'toString' );
    expect( myObject.toString ).to.be.a( 'function' );
    expect( myObject.toString() ).to.equal( {}.toString() );
  } );

  it( 'can be overwritten', function() {
    var myToStringValue = 'I turned into a string.';
    myObject.toString = function() { return myToStringValue; };
    expect( myObject.toString() ).to.equal( myToStringValue );
  } );

} );


