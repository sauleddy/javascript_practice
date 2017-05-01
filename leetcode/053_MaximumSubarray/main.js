/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	let ret = findNextPositive(nums, 0);
	if(ret[0] === -1) return findMax(nums);
	let sum_max = nums[ret[0]];
	let sum_cur = sum_max;
	while(true) {
		// console.log(ret[0]);
		ret = findNextPositive(nums, ret[0]+1);
		// console.log(ret);
		if(ret[0] === -1) break;
		if(sum_cur + nums[ret[0]] + ret[1] > nums[ret[0]]) {
			sum_cur += nums[ret[0]] + ret[1];
		} else {
			sum_cur = nums[ret[0]];
		}
		if(sum_cur > sum_max) sum_max = sum_cur;
		// console.log(sum_max);
	}
	return sum_max;
};

var findNextPositive = function(nums, begin) {
	if(begin >= nums.length) return [-1, 0];
	let sum_negative = 0;
	for(let i=begin; i<nums.length; ++i) {
		if(nums[i] <= 0) sum_negative += nums[i];
		else return [i, sum_negative];
	}
	return [-1, sum_negative];
};

var findMax = function(nums) {
	let max = Number.MIN_SAFE_INTEGER;
	for(let i=0; i<nums.length; ++i) {
		if(nums[i] > max) max = nums[i];
	}	
	return max;
};

console.log(maxSubArray([1, 2]));