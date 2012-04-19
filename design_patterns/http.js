/**
* Singleton  Closure Object to execute Http request 
**/
var HTTPService = (function(){

	return {

		get : function( url  , sucessCallBack , errorCallBack , params ,  dataType) {	

			var r = jQuery.get( url ,  params , dataType );
			if ( sucessCallBack ) 
				r.success( sucessCallBack );
			if( errorCallBack )
				r.error ( errorCallBack );
			return r != null ;
		},
		post : function( url  , sucessCallBack , errorCallBack , params ,  dataType) {	

			var r = jQuery.post( url ,  params , dataType );
			if ( sucessCallBack ) 
				r.success( sucessCallBack );
			if( errorCallBack )
				r.error ( errorCallBack );
			return r != null ;
		},


	}

})();
