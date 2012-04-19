var Singleton = {
    attribute1: true,
    attribute2: 'Singleton',

    hasAttributes: function() {
        return true;
    }
};


var ClosureSingleton = (function() {

    //Private Attributes
    number1 = 10;
    number2 = 20;

    return {

        //Public Attributes
        publicAttributeString: 'You are the best JS programmer!',
        publicAttributeBoolean: true,

        //Public Methods
        publicMethod1: function() {
            return 'The number of the beast';
        },
        publicMethod2: function() {
            //Cloure another function (Private)
            return (function() {
                console.log('Numbers: ' + number1 + ', ' + number2);
                return number1 + number2 === 30;
            })();
        }
    };
})();


//Lazy Instantiation
var LazySingleton = (function() {

    var uniqueInstance;

    function constructor() {

        return {
            //Public Attributes
            publicAttributeString: 'You are the best JS programmer!',
            publicAttributeBoolean: true,

            //Public Methods
            publicMethod1: function() {
                return 'The number of the beast';
            },
            publicMethod2: function() {
                //Cloure another function (Private)
                return (function() {
                    console.log('Numbers: ' + number1 + ', ' + number2);
                    return number1 + number2 === 30;
                })();
            }
        };

    };

    return {
        getInstance: function() {
            if (!uniqueInstance)
            uniqueInstance = constructor();
            return uniqueInstance;
        }
    };

})();
