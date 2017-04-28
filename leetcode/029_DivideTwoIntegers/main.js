/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const MAX_INT = Math.pow(2, 31) - 1;
const MIN_INT = Math.pow(2, 31) * -1;

var divide = function(dividend, divisor) {
	if(dividend === 0 || divisor === 0) return 0;
	let m = Math.abs(dividend), n = Math.abs(divisor);
	if(m < n) return 0;
	let result = 0;
	if(n === 1) {
		result = m;
	} else {
		while(m >= n) {
			let cnt = 1, n_temp = n;
			while(n_temp << 1 > 0 && m >= n_temp << 1) {
				n_temp <<= 1;
				cnt <<= 1;
			}
			result += cnt;
			m -= n_temp;
		}	
	}
	if((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
		result *= -1;
	}
	if(result > MAX_INT || result < MIN_INT) return MAX_INT;
	return result;
};

console.log(divide(2147483647, 2));
//console.log(divide(11, 2));
/*let a = -2;
a >>= 1;
console.log(a);*/
