'use strict';

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
	if(nums.length === 0) {
		return 0;
	} else if(nums.length === 1) {
		return nums[0];
	} else if(nums.length === 2) {
		return Math.max(nums[0], nums[1]);
	} else if(nums.length === 3) {
		return Math.max(nums[0], nums[1], nums[2]);
	}
	let sum_have_0 = nums[0] + rob_v1(nums.slice(2, -1));
	let sum_no_0 = rob_v1(nums.slice(1));
	console.log(sum_have_0);
	console.log(sum_no_0);
	return Math.max(sum_have_0, sum_no_0);
};

var rob_v1 = function(nums) {
	// console.log(nums);
	if(nums.length === 0) {
		return 0;
	}
	if(nums.length >= 2) {
		nums[1] = Math.max(nums[0], nums[1]);
	}
	console.log(nums);
	for(let i=2; i<nums.length; ++i) {
		nums[i] = Math.max(nums[i] + nums[i-2], nums[i-1]);
	}
	return nums[nums.length - 1];
}

//console.log(rob([1, 2, 9, 5, 6, 10, 3, 2]));
console.log(rob([1, 3, 1, 3, 100]));
