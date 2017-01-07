'use strict';

module.exports = {
    fizzBuzz : function(n) {
        if (n.constructor != Number){
            return 'Input must be integer';
        }
        if (n%3 == 0 && n%5 == 0) {
            return "FizzBuzz";
        } else if (n%3 == 0) {
            return 'Fizz';
        } else if (n%5 == 0){
            return 'Buzz';
        } else {
            return n;
        }
    }
}