/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
	if(nums.length === 0) {
		return 0;
	} else if(nums.length === 1) {
		return nums[0];
	}
	nums[1] = Math.max(nums[0], nums[1]);
	for(let i=2; i<nums.length; ++i) {
		nums[i] = Math.max(nums[i] + nums[i-2], nums[i-1]);
	}
	return nums[nums.length-1];
};