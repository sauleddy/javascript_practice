/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
	let begin = 0, end = nums.length - 1;
	while(begin < end) {
		while(begin < nums.length && nums[begin] !== val) ++begin;
		while(end > 0 && nums[end] === val) --end;
		if(begin >= end) break;
		let temp = nums[begin];
		nums[begin] = nums[end];
		nums[end] = temp;
	}
	return begin;
};