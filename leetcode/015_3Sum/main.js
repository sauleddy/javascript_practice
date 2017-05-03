/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const mode_left = 1;
const mode_right = -1;

var threeSum = function(nums) {
	nums = nums.sort(compare);
	console.log(nums);
	let result = [];
	for(let i=0; i<nums.length-1; ++i) {
		if(i > 0 && nums[i] === nums[i-1]) continue;
		console.log(i);
		let left = i + 1;
		let right = nums.length - 1;
		while(left < right) {
			let sum_this = nums[i] + nums[left] + nums[right];
			if(sum_this === 0) {
				result.push([nums[i], nums[left], nums[right]]);	
			}
			if(sum_this < 0) {
				left = findNext(nums, left, mode_left);
			} else if(sum_this > 0) {
				right = findNext(nums, right, mode_right);
			} else {
				left = findNext(nums, left, mode_left);
				right = findNext(nums, right, mode_right);
			}
		}
	}
	return result; 
};

var compare = function(x, y) {
	if(x > y) return 1;
	else if(x < y) return -1;
	return 0;
};

var findNext = function(nums, idx, mode) {
	let pivot = nums[idx];
	idx += mode;
	while(nums[idx] === pivot) {
		idx += mode;
	}
	return idx;
};

console.log(threeSum([3,0,-2,-1,1,2]));