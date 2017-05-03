/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
	nums = nums.sort(compare);
	// console.log(nums);
	let closest = nums[0] + nums[1] + nums[2];
	let diff = Math.abs(closest - target);

	for(let i=0; i<nums.length-2; ++i) {
		let left = i + 1;
		let right = nums.length - 1;
		while(left < right) {
			let sum_this = nums[i] + nums[left] + nums[right];
			let diff_this = Math.abs(sum_this - target);
			if(diff_this < diff) {
				diff = diff_this;
				closest = sum_this;
			}
			if(sum_this < target) ++left;
			else --right;
		}
	}
	return closest;	    
};

var compare = function(x, y) {
	if(x > y) return 1;
	else if(x < y) return -1;
	return 0;
}

console.log(threeSumClosest([-2, 2, 1, -4], 1));