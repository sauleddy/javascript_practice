/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
	let result = [-1, -1];
	let begin = 0;
	let end = nums.length - 1;
	let mid = Math.floor((begin + end) / 2);
	while(begin <= end) {
		if(nums[mid] === target) {
			break;
		} else if(nums[mid] > target) {
			end = mid - 1;
		} else {
			begin = mid + 1;
		}
		mid = Math.floor((begin + end) / 2);
	}
	if(begin > mid) {
		return result;
	}
	console.log(mid);
	result = [mid, mid];
	while(result[0]-1 >= 0 && nums[result[0]-1] === nums[mid]) {
		--result[0];	
	}
	while(result[1]+1 >= 0 && nums[result[1]+1] === nums[mid]) {
		++result[1];	
	}
	console.log(result);
	return result;
};

searchRange([5, 7, 7, 8, 8, 10], 8);
