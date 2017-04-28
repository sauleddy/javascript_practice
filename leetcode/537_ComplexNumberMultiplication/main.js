/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
	let splite_a = spliteNumber(a);
	let splite_b = spliteNumber(b);
	let result_a = splite_a[0] * splite_b[0] - splite_a[1] * splite_b[1];
	let result_b = splite_a[0] * splite_b[1] + splite_a[1] * splite_b[0];
	let result = `${result_a}+${result_b}i`;
	return result;
};

/**
 * @param {string} num
 * @return Number[]
 */
var spliteNumber = function(num) {
	let result = new Array(2).fill(0);
	let idx_add = num.indexOf('+');
	result[0] = parseInt(num.slice(0, idx_add));
	result[1] = parseInt(num.slice(idx_add + 1));
	return result;
}

console.log(complexNumberMultiply('1+-1i', '1+-1i'));