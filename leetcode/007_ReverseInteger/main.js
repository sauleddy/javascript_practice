/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
	let x_pos = Math.abs(x);
	let x_reverse = 0;
	let x_temp = x;
	while(x_temp > 0) {
		x_reverse += x_temp % 10;
		x_reverse *= 10;
		x_temp /= 10;
	}
	if(x < 0) {
		x_reverse *= -1;
	}
	if(x_reverse > 0x7fffffff || x_reverse < -0x80000000) {
		return 0;
	}
	return x_reverse;
};