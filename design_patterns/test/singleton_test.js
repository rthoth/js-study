 module("Singleton");

 test("singleton_objects", function() {
   
    equal( Singleton.attribute1 ,  true  , 'Singleton Attribute Objects sucess');
    equal( Singleton.attribute2 ,  'Singleton'  , 'Singleton Atribute  Objects sucess');
    equal( Singleton.hasAttributes() ,  true  , 'Singleton Function Objects sucess');

    equal( ClosureSingleton.publicAttributeString.length > 0 ,  true  , 'Closure Singleton Attribute String Objects sucess');
    equal( ClosureSingleton.publicAttributeBoolean ,  true  , 'Closure Singleton Attribute Boolean Objects sucess');
    equal( ClosureSingleton.publicMethod1().length > 0 ,  true  , 'Closure Singleton Method Objects sucess');
    equal( ClosureSingleton.publicMethod2() ,  true  , 'Closure Singleton Method Objects sucess');


	equal( LazySingleton.getInstance().publicAttributeString.length > 0 ,  true  , 'Lazy Singleton Attribute String Objects sucess');
    equal( LazySingleton.getInstance().publicAttributeBoolean ,  true  , 'Lazy Singleton Attribute Boolean Objects sucess');
    equal( LazySingleton.getInstance().publicMethod1().length > 0 ,  true  , 'Lazy Singleton Method Objects sucess');
    equal( LazySingleton.getInstance().publicMethod2() ,  true  , 'Closure Singleton Method Objects sucess');


 });

 
