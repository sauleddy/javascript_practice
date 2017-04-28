/**
 * @param {number[]} nums
 * @return {boolean}
 */
var makesquare = function(nums) {
	if(nums.length < 4) {
		return false;
	}
	nums = nums.sort();
	let sum = 0;
	for(let i=0; i<nums.length; ++i) {
		sum += nums[i];
	}
	if(sum % 4 !== 0) {
		return false;
	}
	let target = sum / 4;
	let sums = [0, 0, 0, 0];
	return help(nums, sums, target, 0);
};

var help = function(nums, sums, target, idx) {
	if (idx >= nums.length) {
		return sums[0] == target && sums[1] == target && sums[2] == target;
  }
	for(let i=0; i<sums.length; ++i) {
		if(sums[i] + nums[idx] > target) {
			continue;
		}
		sums[i] += nums[idx];
		if(help(nums, sums, target, idx+1)) {
			return true;
		}
		sums[i] -= nums[idx];
	}
	return false;
};

console.log(makesquare([3, 3, 3, 3, 4]));