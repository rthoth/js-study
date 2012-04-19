var Book = (function(){

	//Private static atributes
	var numOfBooks = 0;

	//Private static method
	function checkIsbn (isbn) {
	    if(isbn == undefined || typeof isbn != 'string') 
	      return false;
	    else
	      	return true;
  	}

	return function(newIsbn, newTitle, newAuthor){

		var isbn, title, author; // private attributes

	  	// Privileged methods.
	  	this.getIsbn = function() {
	   	 return isbn;
	  	};
	  	this.setIsbn = function(newIsbn) {
	    	if(!checkIsbn(newIsbn)) throw new Error('Book: Invalid ISBN.');
	    	isbn = newIsbn;
		};
	  	
	  	this.getTitle = function() {
	    	return title;
		};
		this.setTitle = function(newTitle) {
	    	title = newTitle || 'No title specified';
		};
	  
	  	this.getAuthor = function() {
	    	return author;
	  	};
	  	this.setAuthor = function(newAuthor) {
	   	 author = newAuthor || 'No author specified';
	  	};

	  	// Constructor code.
    	numOfBooks++; 
    	if(numOfBooks > 50) 
    		throw new Error('Book: Only 50 instances of Book can be '+ 'created.');
	  	
	  	this.setIsbn(newIsbn);
	  	this.setTitle(newTitle);
	  	this.setAuthor(newAuthor);
	}

})();

// Public static method.
Book.convertToTitleCase = function(inputString) {
	return 'Title: '  + inputString;
};

// Public, non-privileged methods.
Book.prototype = {
	display : function() {
 	   return this.getIsbn() + ', ' + this.getTitle() + ', ' + this.getAuthor();
	}
};

