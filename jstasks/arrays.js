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

	if (!array.length) {
		return [];
	}

	var arrayL = [];

	for (var i = 0; i < array.length; i += 1) {

		if (i === 0) {
			arrayL[i] = 1;
		} else {
			if (array[i] > array[i-1]) {
				arrayL[i] = arrayL[i - 1] + 1;
			} else {
				arrayL[i] = 1;
			}
		}
	}

	var index = 0;
	var max = arrayL[0];

	for (var i = 0; i < arrayL.length; i += 1) {
		if (arrayL[i] > max) {
			index = i;
			max = arrayL[i];
		}
	}

	return array.slice(index - max + 1, index + 1);
}

console.log(getMaxLen([1,3,7,4,6,7,8,1,2,5,7,8,90,1]));
console.log(getMaxLen([1,3,7,4,8,9,10,15,20,30,40,6,7,8,1,2,5,7,8,90,1]));
console.log(getMaxLen([1,3,730,40,6,7,890,1]));
console.log(getMaxLen([1,3,7,4,1,2,5,71]));


function getMaxSequence (a) {

	if (!a.length) {
		return [];
	}

	var s = [];
	var c;
	var prev;

	for (var i = 0; i < a.length; i++) {

		if(i === 0) {
			c = {
				s: i,
				e: i,
				l: 1
			};

			prev = a[i];
			continue;
		}

		if (a[i] > prev ) {
			c.e = i;
			c.l++;

			if (i === a.length - 1) {
				s.push(c);
			}

		} else {
			s.push(c);

			c = {
				s: i,
				e: i,
				l: 1
			};
		}

		prev = a[i];
	}

	var max = {
		l:0
	};

	s.forEach(function (item) {
		if(item.l > max.l) {
			max = item;
		}
	});

	return a.slice(max.s, max.e + 1);
}

console.log(getMaxSequence([1,3,7,4,6,7,8,1,2,5,7,8,90,1]));
console.log(getMaxSequence([1,3,7,4,8,9,10,15,20,30,40,6,7,8,1,2,5,7,8,90,1]));
console.log(getMaxSequence([1,3,730,40,6,7,890,1]));
console.log(getMaxSequence([1,3,7,4,1,2,5,71]));