//a.Sub Sum (O(n^2))

function getMaxSubSum(array) {

  var maxSum = 0;

  for (var i = 0; i < array.length; i++) {

    var sum = 0;

    for (var j = i; j < array.length; j++) {

      sum += array[j];
      maxSum = Math.max(maxSum, sum);
    }
  }

  return maxSum;
}

console.log(getMaxSubSum([-1,2,3,-9]));
console.log(getMaxSubSum([2,-1,2,3,-9]));
console.log(getMaxSubSum([-1,2,3,-9,11]));
console.log(getMaxSubSum([-2,-1,1,2]));
console.log(getMaxSubSum([100,-9,2,-3,5]));
console.log(getMaxSubSum([1,2,3]));
console.log(getMaxSubSum([-1,-2,-3]));

//b.Search

(function() {
	var array = [-1,2,3,-9,11];
	var min = array[0];
	var max = array[0];

	for(var i = 0; i < array.length; i += 1) {
		/*if (array[i] < min)
			min = array[i];*/
		min = Math.min(array[i], min);
		/*if (array[i] > max)
			max = array[i];*/
		max = Math.max(array[i], max);
	}

	console.log("Min=" + min);
	console.log("Max=" + max);
})();

function compareNumbers(num1, num2) {
	return num1 - num2;
}

(function() {

	var array = [-1,2,3,-9,11];
	array.sort(compareNumbers);
	var median;

	for(var i = 0; i < array.length; i += 1) {

		if (array.length % 2 == 0) {
			median = (array[array.length / 2] + array[array.length / 2 - 1]) / 2;

		} else {
			median = array[Math.floor(array.length / 2)];
		}

		console.log("Median=" + median);
	}
})();

//c.Selecton Task

function getMaxLen(array) {

	var arrayLen = [];
	var arrayMaxLen = [];

	for (var i = 0; i < array.length; i += 1) {

		arrayLen[i] = 1;

		for (var j = 0; j < i; j += 1) {

			if (array[j] < array[i])
				arrayLen[i] = Math.max(arrayLen[i], arrayLen[j] + 1);
		}
	}
 
	var maxLen = arrayLen[0];
	var index;
	for (var i = 0; i < arrayLen.length; i += 1) {
		maxLen = Math.max(maxLen, arrayLen[i]);
		index = i;
	}

	for (var i = index - maxLen + 1; i < index ; i++)
		arrayMaxLen.push(array[i]);

	return arrayMaxLen;
}

console.log(getMaxLen([1,3,7,4,6,7,8,1,2,5,7,8,90,1]));
console.log(getMaxLen([1,3,7,4,8,9,10,15,20,30,40,6,7,8,1,2,5,7,8,90,1]));


/*

function getMaxSequence (a) {
	var s = [];
	var c;
	var prev;

	for (var i = 0; i < a.length; i++) {

		if (!c) {
			c = {
				s: i,
				e: i,
				l: 1
			};
		}

		if (prev && a[i] > prev ) {
			c.e = i;
			c.l++;
		} else if (prev && a[i] <= prev) {
			s.push(c);
			c = null;
			prev = null;
		}

		prev = i;
	}

	return s;
}
*/
