 module("Mixin");

 test("mixin_serialize_object", function() {

 	augment(Book, Mixin);
 	var book = new Book('123456', 'Study', 'wagnerjg');
	var serializedString = book.serialize();
	ok( true , serializedString );

 });

 
