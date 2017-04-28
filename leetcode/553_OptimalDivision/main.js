const mode_min = 0x00;
const mode_max = 0x01;
const mode_invertor = new Map([[mode_min, mode_max], [mode_max, mode_min]]);

/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function(nums) {
	let result = help(nums, 0, nums.length-1, mode_max);
	return result[1];
};

var help = function(nums, begin, end, mode) {
	console.log(nums.slice(begin, end + 1));
	if(end - begin === 0) return [nums[begin], `${nums[begin]}`];
	if(end - begin === 1) return [nums[begin]/nums[end], `${nums[begin]}/${nums[end]}`];
	
	let result = [undefined, undefined];
	for(let i=begin; i<end; ++i) {
		let res_left = help(nums, begin, i, mode);
		let res_right = help(nums, i+1, end, mode_invertor.get(mode));
		let res_div = res_left[0] / res_right[0];
		let update_res = false;
		if(result[0] === undefined) update_res = true;
		else {
			if(mode === mode_min) {
				if(res_div < result[0]) update_res = true;
			} else {
				if(res_div > result[0]) update_res = true;
			}	
		}
		if(update_res === true) {
			result[0] = res_div;
			if(i < end - 1) result[1] = `${res_left[1]}/(${res_right[1]})`;
			else result[1] = `${res_left[1]}/${res_right[1]}`;
		}
	}
	console.log(result[1]);
	return result;
}

// let num_test = [10, 20];
// console.log(`${num_test[1]}`);
console.log(optimalDivision([6, 2, 3, 4, 5]));