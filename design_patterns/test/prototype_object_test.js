 module("Inheritance");

 test("inheritance_prototype_object", function() {
    
    //Simple object
    equal( Person.getName() , 'default name' , 'Person created sucess');

    //Cloned Object
    var clonedPerson = clone(Person);
	clonedPerson.name = 'WagnerJG';
    equal( clonedPerson.getName() , 'WagnerJG' , 'Cloned Person sucess');
   
    //Verify de clone
    equal( Person.getName() , 'default name' , 'Verify that clone sucess');

 });

 
