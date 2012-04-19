module("HTTPService");

test("http_service_test", function(){

	equal( HTTPService.get('http://wagnerjg.local' ,  
			function(data){ console.log( data); } , 
			function(data){ console.log( data); } ), true  , 'GET sucess');



	equal( HTTPService.post('http://wagnerjg.local' ,  
			function(data){ console.log( data); } , 
			function(data){ console.log( data); }  ), true  , 'POST sucess');

});