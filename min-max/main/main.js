'use strict';

module.exports = {
    findMinMax : function(array) {
        if(!array) {
            return null;
        }else if (array.length < 1){
            return [];
        } else if(array.length < 2){
            return 'Minimun of two numbers are needed to compare';
        } else if (array.constructor != Array){
            return 'Only type Array is allowed';
        } 
        for (var i in array){
            if (array[i].constructor != Number){
                return 'Only type Number is allowed in the Array';
            }
        }
        var lowest_num,
            largest_num;
        for (var i in array) {
           if (i == 0) {
                largest_num = array[i];
                lowest_num = array[i];
            } else {
                if (array[i] > largest_num) {
                    largest_num = array[i];
                } else if (array[i] < lowest_num) {
                    lowest_num = array[i];
                }
            }
        }
        if (lowest_num == largest_num){
            return [lowest_num];
        }
        return [lowest_num, largest_num];
    }
}