/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
	let num1 = 0;
	let num2 = 1;
	while(num2 < num) {
		let num_temp = num2;
		num2 = num2 + num2 - num1 + 2;
		num1 = num_temp;
	}
	if(num2 === num) {
		return true;
	} else {
		return false;
	}
};