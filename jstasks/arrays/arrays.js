var arrayProcessingTool = {

    //a.Sub Sum (O(n^2))
    getMaxSubSum: function getMaxSubSum(array) {

        var maxSum = 0;

        for (var i = 0; i < array.length; i += 1) {

            var sum = 0;

            for (var j = i; j < array.length; j++) {

                sum += array[j];
                maxSum = Math.max(maxSum, sum);
            }
        }

        return maxSum;
    },

    //b.Search
    getMinValue: function (array) {

        var min = array[0];

        for (var i = 0; i < array.length; i += 1) {
            if (array[i] < min)
                min = array[i];
            //min = Math.min(array[i], min);
        }
        return min;
    },

    getMaxValue: function (array) {

        var max = array[0];

        for (var i = 0; i < array.length; i += 1) {
            if (array[i] > max)
                max = array[i];
            //max = Math.max(array[i], max);
        }
        return max;
    },

    compareNumbers: function (num1, num2) {
        return num1 - num2;
    },

    getMedianValue: function (array) {

        var array = [-1, 2, 3, -9, 11];
        array.sort(this.compareNumbers);
        var median;

        if (array.length % 2 === 0) {
            median = (array[array.length / 2] + array[array.length / 2 - 1]) / 2;

        } else {
            median = array[Math.floor(array.length / 2)];
        }

        return median;
    },

    //c.Selecton Task
    getMaxLen: function (array) {

        var arrayLen = [];
        var arrayMaxLen = [];

        for (var i = 0; i < array.length; i += 1) {

            if (i === 0) {
                arrayLen[i] = 1;
            } else {
                if (array[i] > array[i - 1]) {
                    arrayLen[i] = arrayLen[i - 1] + 1;
                } else {
                    arrayLen[i] = 1;
                }
            }
        }

        var maxLen = arrayLen[0];
        var index = 0;
        for (var i = 0; i < arrayLen.length; i += 1) {
            maxLen = Math.max(maxLen, arrayLen[i]);
            if (arrayLen[i] === maxLen)
                index = i;
        }

        for (var i = index - maxLen + 1; i <= index; i += 1) {
            arrayMaxLen.push(array[i]);
        }

        return arrayMaxLen;
    }
};

console.log(arrayProcessingTool.getMaxSubSum([-1, 2, 3, -9]));
console.log(arrayProcessingTool.getMaxSubSum([2, -1, 2, 3, -9]));
console.log(arrayProcessingTool.getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(arrayProcessingTool.getMaxSubSum([-2, -1, 1, 2]));
console.log(arrayProcessingTool.getMaxSubSum([100, -9, 2, -3, 5]));
console.log(arrayProcessingTool.getMaxSubSum([1, 2, 3]));
console.log(arrayProcessingTool.getMaxSubSum([-1, -2, -3]));

console.log(arrayProcessingTool.getMinValue([-1, 2, 3, -9, 11]));
console.log(arrayProcessingTool.getMaxValue([-1, 2, 3, -9, 11]));
console.log(arrayProcessingTool.getMedianValue([-1, 2, 3, -9, 11]));

console.log(arrayProcessingTool.getMaxLen([1, 3, 7, 4, 6, 7, 8, 1, 2, 5, 7, 8, 90, 1]));

var arraySorter = {

    cash: {
        matrix: [],
        cacheMatrix: []
    },

    bubbleSort: function (array) {

        var t;

        for (var i = 0; i < array.length; i += 1) {
            for (var j = 0; j < array.length - i - 1; j += 1) {
                if (array[j] > array[j + 1]) {
                    t = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = t;
                }
            }
        }

        return array;
    },

    selectionSort: function (array) {

        var t;

        for (var i = 0; i < array.length - 1; i += 1) {
            var min = i;
            for (var j = i + 1; j < array.length; j += 1) {
                if (array[j] < array[min]) {
                    min = j;
                }
            }
            t = array[min];
            array[min] = array[i];
            array[i] = t;
        }
        return array;
    },

    insertionSort: function (array) {


        //region Зачем этот кусок?
        var newArray = array.slice();

        for (var i = 0; i < this.cash.matrix.length; i += 1) {
            if (this.cash.matrix[i].join() === array.join()) {
                return 'Array is taken from the cache: ' + this.cash.cacheMatrix[i];
            }
        }

        this.cash.matrix.push(array);

        for (var i = 0; i < newArray.length; i += 1) {
            var v = newArray[i];
            var j = i - 1;
            while (j >= 0 && newArray[j] > v) {
                newArray[j + 1] = newArray[j];
                j -= 1;
            }
            newArray[j + 1] = v;
        }
        this.cash.cacheMatrix.push(newArray);
        return "Array isn't taken from the cache: " + newArray;
    }
};

console.log(arraySorter.bubbleSort([1, 3, 7, 4, 6, 7, 8, 1, 2, 5, 7, 8, 90, 1]));
console.log(arraySorter.selectionSort([1, 3, 7, 4, 6, 7, 8, 1, 2, 5, 7, 8, 90, 1]));
console.log(arraySorter.insertionSort([1, 3, 7, 4, 6, 7, 8, 1, 2, 5, 7, 8, 90, 1]));
console.log(arraySorter.insertionSort([1, 3, 7, 4, 6, 7, 8, 1, 2, 5, 7, 8, 90, 1]));

var binaryConverter = {

    conversionFromDecimalToBinary: function (array) {

        /*
         Что-то непонятное происходит, зачем передавать число разбитым и
         потом собирать его, так в условии?
          */
        var str = '';
        var number;
        var decimalNumber = '';
        var balance = [];

        for (var i = 0; i < array.length; i += 1) {
            str += array[i];
        }

        // ошибки не будет, но надо ставить ; всегда, тоже guidlines.
        number = Number(str);

        // тут можно просто пушить и не юзать i, balance.push(number % 2)
        var i = 0;
        while (number > 0) {
            balance.push(number % 2);
            number = Math.floor(number / 2);
        }

        // тут не мог понять как в результате сложения чисел получается строка ))), но это правильно ты сделала.
        for (var i = balance.length - 1; i >= 0; i -= 1) {
            decimalNumber += balance[i];
        }

        return decimalNumber;
    },

    conversionFromBinaryToDecimal: function (array) {

        // тут тоже хорошо бы число передавать или в этом случае строку
        var sum = 0;

        for (var i = 0; i < array.length; i += 1) {
            sum += array[i] * Math.pow(2, array.length - i - 1);
        }

        // А как можно всю эту функцию в 1 строку записать, юзая функции JS?

        return sum;
    }
};

console.log(binaryConverter.conversionFromDecimalToBinary([1, 3, 7, 4]));
console.log(binaryConverter.conversionFromBinaryToDecimal([1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0]));

