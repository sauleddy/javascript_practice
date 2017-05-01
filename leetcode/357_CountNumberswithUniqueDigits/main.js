/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
	if(n === 0) return 1;
	if(n === 1) return 10;
	let num_valid = 1;
	for(let i=1; i<n; ++i) {
		num_valid *= (10 - i);
	}
	return countNumbersWithUniqueDigits(n - 1) + 9 * num_valid;
};

console.log(countNumbersWithUniqueDigits(4));