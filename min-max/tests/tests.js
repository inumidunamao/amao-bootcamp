(function() {
  'use strict';

  var findMinMax = require('../main/main.js').findMinMax;


  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [] for []', function () {
        expect(findMinMax([])).toEqual([]);
      });

      it('should return `Minimun of two numbers are needed to compare` for [4]', function () {
        expect(findMinMax([4])).toEqual('Minimun of two numbers are needed to compare');
      });

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [-8, 4] for [-3, 4, -6, 3, -8, 4]', function () {
        expect(findMinMax([-3, 4, -6, 3, -8, 4])).toEqual([-8, 4]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

    });

    describe('Validate the type of input', function () {

      it('should return `Only type Array is allowed` for `a string`', function () {
        expect(findMinMax('a string')).toEqual('Only type Array is allowed');
      });

      it('should return `Only type Array is allowed` for 32', function () {
        expect(findMinMax(32)).toEqual('Only type Array is allowed');
      });

      it('should return null for null', function () {
        expect(findMinMax(null)).toEqual(null);
      });

      it('should return null for undefined', function () {
        expect(findMinMax(undefined)).toEqual(null);
      });

      it('should return `Only type Number is allowed in the Array` for [2,3,`32`,83.2]', function () {
        expect(findMinMax([2,3,'32',83.2])).toEqual('Only type Number is allowed in the Array');
      });

    });

  });

})();