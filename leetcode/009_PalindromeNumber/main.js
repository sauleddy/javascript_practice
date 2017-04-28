/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
	if(x < 0) {
		return false;
	}
	// console.log(x);
	let number = 0;
	let divisor = 10;
	while(Math.floor(x / divisor) !== 0) {
		++number;
		divisor *= 10;
	}
	divisor /= 10;
	// console.log(number);
	for(let i=0; i<number/2; ++i) {
		if((x % 10) !== (Math.floor(x / divisor) % 10)) {
			return false;
		}
		x = Math.floor(x / 10);
		divisor = Math.floor(divisor / 100);
	}
	return true;
};

console.log(isPalindrome(-2147447412));