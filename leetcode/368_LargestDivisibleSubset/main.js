/**
 * @param {number[]} nums
 * @return {number[]}
 */

var largestDivisibleSubset = function(nums) {
	if(nums.length === 0) return [];
	nums = nums.sort(compare);
	// console.log(nums);
	let map_length = new Map();
	map_length.set(0, 0);
	map_length.set(nums[0], 1);
	let map_last = new Map();
	map_last.set(nums[0], 0);

	let max_idx = nums[0];
	let max_length = 1;
	for(let i=1; i<nums.length; ++i) {
		let idx_find = 0;
		let max_length_this = 0;
		for(let j=i-1; j>=0; --j) {
			if(nums[i] % nums[j] === 0) {
				// console.log(nums[j]);
				if(map_length.get(nums[j]) > max_length_this) {
				    idx_find = nums[j];
				    max_length_this = map_length.get(nums[j]);
				}
				if(map_length.get(nums[j]) === max_length) {
					break;
				}
			}
		}
		map_length.set(nums[i], map_length.get(idx_find, 0) + 1);
		map_last.set(nums[i], idx_find);
		if(map_length.get(nums[i]) > max_length) {
			++max_length;
			max_idx = nums[i];	
		}
	}
	//console.log(map_last);
	//console.log(map_length);
	let result = new Array(max_length).fill(0);
	result[max_length-1] = max_idx;
	for(let i=max_length-2; i>=0; --i) {
		result[i] = map_last.get(result[i+1]);
	}
	return result;
};

var compare = function(x, y) {
	if(x > y) return 1;
	if(x < y) return -1;
	return 0;
};