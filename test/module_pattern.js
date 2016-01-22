/* jshint expr:true */
var expect  = require( 'chai' ).expect
;

// https://toddmotto.com/mastering-the-module-pattern/

describe( 'Module Pattern', function() {
} );

describe( 'The Revealing Module Pattern', function() {
} );

// 'Export This: Interface Design Patterns for Node.js Modules //
// http://bites.goodeggs.com/posts/export-this/

describe( 'Namespace: Exporting an object', function() {

  // Reliable Javascript, Chapt 3
  describe( 'Modules-at-Will', function() {
    it( 'provides a function on a namespace' );
    it( 'the init function returns an object holding the API' );
    it( 'the init function can be used to inject dependencies' ); 
  } );

  // Reliable Javascript, Chapt 3
  describe( 'Immediately-Executing Modules', function() {
    it( 'is setup immediately when invoked/loaded' );
    it( 'is often used for a Singleton pattern' );
    it( 'requires that any injectable dependencies are available when it is invoked' );
  } );
} );


