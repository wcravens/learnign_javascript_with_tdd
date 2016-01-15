/* jshint expr:true */
var expect  = require( 'chai' ).expect
;

describe( 'Primatives', function() {
/*

There are 6 primative data types: `Boolean`, `Null`, `Undefined`, `Number`,
`String`, `Symbol` (ES6) and an `Object` data type.

(MDN)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures]

*/

  describe( 'Boolean', function() {
    it( 'can be true or false', function() {
      expect( true  ).to.equal( true );
      expect( false ).to.equal( false );
      expect( true  ).to.not.equal( false );
    } );

    it( 'can be falsy', function() {
      expect( Boolean( 0 )          ).to.equal( false );
      expect( Boolean( "" )         ).to.equal( false );
      expect( Boolean( null )       ).to.equal( false );
      expect( Boolean( undefined )  ).to.equal( false );
      expect( Boolean( NaN )        ).to.equal( false );
    } );

    it( 'everythign else is falsy including [], any string, empty functions and empty objects', function() {
      expect( Boolean( [] )             ).to.equal( true );
      expect( Boolean( 'a' )            ).to.equal( true );
      expect( Boolean( function() {} )  ).to.equal( true );
      expect( Boolean( {} )             ).to.equal( true );
    } );


  } );

  describe( 'Null', function() {
    it.skip( 'should something', function() {} );
  } );

  describe( 'Undefined', function() {
    it.skip( 'should something', function() {} );
  } );

  describe( 'Number', function() {

    it( 'zero has two representations, but they are equaivalent', function() {
      expect( -0 ).to.equal( +0 );
    } );
    it( 'can be -Infintity', function() {
      expect( 42 / -0 ).to.equal( -Infinity );
    } );

    it( 'can be -Infintity', function() {
      expect( 42 / 0 ).to.equal( Infinity );
    } );

    it( 'can be NaN', function() {
      expect( 'a' / 1 ).to.be.NaN;
    } );

    it( "has it's limits", function() {
      expect( Number.MAX_VALUE + 1 ).to.equal( Number.MAX_VALUE );
    } );

  } );

  describe( 'String', function() {
    it.skip( 'should something', function() {} );
  } );

  describe( 'Symbol', function() {
    it.skip( 'should something', function() {} );
  } );

} );
