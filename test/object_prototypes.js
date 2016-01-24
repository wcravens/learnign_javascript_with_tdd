/* jshint expr:true */
var expect  = require( 'chai' ).expect
;

describe( "Object Prototype", function(){
  describe( "The default Object.prototype", function() {
  } );

  var myObject;
  beforeEach( function() {
    myObject = { myProperty: 'value' };
  } );

  describe( 'inheritance by delegation', function() {
    it( 'search the prototype chain until a property is found' );
  } );

  describe( 'inheritance by concatenation', function() {
    it( 'you can combine object behavior together' );
  } );

  it( "object literals are automatically linked to the 'Object.prototype'", function(){
    expect( myObject ).to.have.property( 'toString' );
    expect( myObject.toString ).to.be.a( 'function' );
    expect( myObject.toString() ).to.equal( {}.toString() );
  } );

  it( 'methods can be overridden', function() {
    var myToStringValue = 'I turned into a string.';
    myObject.toString = function() { return myToStringValue; };
    expect( myObject.toString() ).to.equal( myToStringValue );
  } );

  describe( 'new Object', function() {
    it( 'allows you to instantiate a new object from a constructor function' );
    it( 'you can add a function to the new object or to the prototype' );
    it( 'functions added to the prototype are the same across all instances' );
    it( 'functions added to the new object with the constructor function are not the same across instances' );
    it( 'the prototype is the same across all instances; a change to the prototype affects all instances' );
  } );

  describe( 'Object.create( obj )', function() {
    it( 'allows you to instantiate a new object inheriting from an other object' );
    it( 'if you use a base prototype it will still be the same across all instances' );
    it( 'allows you to create an object that does not inherit a prototype chain', function() {
      var myObject = Object.create( null );
      expect( myObject.toString ).to.be.undefined;
    } );
  } );

  describe( 'Function Objects', function() {
    it( 'automatically gets a prototype with a constructor property set to itself', function() {
      function myFunction() { return 'value'; }
      expect( myFunction ).to.equal( myFunction.prototype.constructor );
      expect( myFunction() ).to.equal( myFunction.prototype.constructor() );
    } );
  } );

  describe( 'instanceof', function() {
    it( 'searches the prototype chain for a particular object' );
  } );

} );


