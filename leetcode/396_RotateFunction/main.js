/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function(A) {
	let sum_A = A.reduce((sum, num) => sum + num, 0);
	// console.log(sum_A);
	let f_pre = A.reduce((sum, num, idx) => sum + num * idx, 0);
	let f_max = f_pre;
	// console.log(f_pre);
	let idx_top = A.length - 1;
	for(let i=1; i<A.length; ++i, --idx_top) {
		let f_cur = f_pre - A[idx_top] * (A.length - 1) + (sum_A - A[idx_top]);
		// console.log(f_cur);
		if(f_cur > f_max) {
			f_max = f_cur;
		}
		f_pre = f_cur;
	}
	return f_max;
};

// console.log(Number.MIN_SAFE_INTEGER);
console.log(maxRotateFunction([4, 3, 2, 6]));