/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
	let log_value = Math.log10(num) / Math.log10(4);
	return (log_value - Math.floor(log_value)) < 0.00000001;
};

console.log(isPowerOfFour(4));