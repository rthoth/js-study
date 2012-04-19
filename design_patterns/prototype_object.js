var Person = {
  name: 'default name',
  getName: function() {
    return this.name;
  },
};

var extend = function(o){
	var newObject = jQuery.extend(true, {}, o);
	return newObject;
};

var clone = function (object) {
    function F() {}
    F.prototype = object;
    return new F;
}

