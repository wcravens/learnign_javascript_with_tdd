/* jshint expr:true */
var expect  = require( 'chai' ).expect
;

describe( 'Objects', function() {

  it( 'can be created with object literals', function() {
    expect( { propertyKey: 'value' } ).to.have.property( 'propertyKey' ).and.equal( 'value' );
  } );

  it( 'can be assigned to an identifier(variable) with a literal', function() {
    var myObject = { propertyKey: 'value' };
    expect( myObject ).to.have.property( 'propertyKey' ).and.equal( 'value' );
  } );

  it( 'can be returned from a function', function() {
    expect( function() { return { propertyKey: 'value' }; }() ).to.have.property( 'propertyKey' ).and.equal( 'value' );
  } );

  it( 'can be returned from a function and assigned to an identifier', function() {
    function giveMeAnObject() { return { propertyKey: 'value' }; }
    var myObject = giveMeAnObject();
    expect( myObject.propertyKey ).to.equal( 'value' );
  } );

  it( 'can be passed into functions as arguments', function() {
    expect( function( myObject ) { return myObject.propertyKey; }( { propertyKey: 'value' } ) ).to.equal( 'value' );
  } );

/*

Don't get into the habit of passing object to functions becuase you want to be able to 'name the arguments' to the function.  This is code smell.  It suggests that your function is too complicated and should be broken up.  You can of course design functions that take intentionally created objects that a validated on construction etc but don't design a function that would take an object literal.

*/

} );

