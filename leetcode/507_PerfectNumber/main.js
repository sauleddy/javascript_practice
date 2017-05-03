/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
	if(num <= 0) return false;
	let sum = 1;
	let base = 2, base_max = Math.floor(Math.sqrt(num)), upper = num;
	console.log(base_max);
	while(base <= base_max) {
		if(upper % base === 0) {
			let qutient = upper / base;
			sum += qutient;
			sum += num / qutient;
			upper = qutient;
			// console.log(sum);
		} else ++base;
		// console.log(base);
	}
	if(sum === num) return true;
	return false;
};

console.log(checkPerfectNumber(6));