/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
	if(m === 0) return 0;
	if(m === n) return n;
	let upper_power = Math.ceil(Math.log2(n));
	let upper_bound = Math.pow(2, upper_power);
	if(upper_bound == n) return m & n;
	let lower_bound = Math.pow(2, upper_power - 1);
	// console.log(upper_bound);
	if(lower_bound > m) return 0;
	if(lower_bound === m) return lower_bound;

	let base = upper_bound - 1;
	let idx = Math.ceil(Math.log2(m - lower_bound));
	let power_idx = lower_bound + Math.pow(2, idx);
	//console.log(power_idx);
	while(power_idx <= n) {
		base &= power_idx;
		//console.log(base);
		power_idx = lower_bound + Math.pow(2, ++idx);
		//console.log(power_idx);
	}
	return base;
};


console.log(rangeBitwiseAnd(1, 3));