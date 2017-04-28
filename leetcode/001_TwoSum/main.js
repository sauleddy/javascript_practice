/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map_occur = new Map();
    for(let i=0; i<nums.length; ++i) {
    	map_occur.set([nums[i]], i);
    }
    for(let i=0; i<nums.length; ++i) {
    	let num = target - nums[i];
    	if(map_occur.get(num) !== undefined) {
    		return [i, map_occur.get(num)];
    	}
    }
};

map_test = new Map();
map_test.set(1, 2);
console.log(map_test.has(2));