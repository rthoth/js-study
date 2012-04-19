var randomNumber = function(){
	var discount = Math.floor((Math.random()*5) + 5);
	return discount;
}


var checkForCode = function(){
				
	var discount_msg = "<p>Your Discount is "+ randomNumber() +"%</p>"; 
	$(this).append(discount_msg);				

	$(".guess_box").each( function(){

		$(this).unbind("click");
	});

}

$(document).ready( function() { 
	$(".guess_box").click( checkForCode );
	
});