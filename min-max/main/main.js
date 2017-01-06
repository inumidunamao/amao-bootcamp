'use strict';

module.exports = {
    findMinMax : function(array) {
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