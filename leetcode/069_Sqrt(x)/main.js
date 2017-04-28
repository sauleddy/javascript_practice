/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
	let begin = 0, end = x;
	let mid = 0;
	while(begin <= end) {
		mid = Math.floor((begin + end ) / 2);
		// console.log(mid);
		let square = mid * mid;
		if(square === x) break;
		let square_plus = (mid + 1) * (mid + 1);
		if(square < x && square_plus > x) break;
		if(square > x) end = mid - 1;
		else if(square < x) begin = mid + 1;
	}
	return mid;
};

console.log(mySqrt(0));