module("Factory");

test("factory_objects", function(){

	equal( CarFactory.createCar('Fiat').name ,   'Fiat' , 'Factory sucess');

});