'use strict';

module.exports = {
    aritGeo : function(array) {
        if (array.length == 0){
            return 0;
        } else if (array.constructor != Array){
            return 'Only inputs of arrays are allowed';
        }
        for (var i in array){
            if (array[i].constructor === String ){
                return 'Only integers are allowed in the array';
            }
        }
        var common_diff = array[0] - array[1];
        var common_ratio = array[1] / array[0];
        if (array[0] - (3 * common_diff) == array[3]) {
            return "Arithmetic";
        } else if (array[0] * (Math.pow(common_ratio, 3)) == array[3]) {
            return "Geometric";
        } else {
            return -1;
        }
    }
}