 module("Basic Patterns");

 test("fully_exposed_objects", function() {
 	
 	var isbn = '123456';
 	var title = 'Design Patterns JS';
 	var author = 'Misterious'
 	var display = isbn + ', ' + title  + ', ' + author;
    var b = new Book( isbn , title , author );
    
    equal( b.display() ,  display, 'Book display sucess');
    equal( b.getIsbn() ,  isbn  , 'ISBN checked sucess');
    equal( b.getTitle() ,  title , 'Title checked sucess');
    equal( b.getAuthor() ,  author , 'Author checked sucess');
    equal( Book.convertToTitleCase( b.display() ) ,  'Title: ' + display , 'Convert Title Case Sucess');

 });

 
