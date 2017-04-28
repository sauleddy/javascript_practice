/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
	nums = nums.sort(compare);
	let sum = 0;
	for(let i=0; i<nums.length; i+=2) {
		sum += nums[i];
	}    
	return sum;
};

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var compare = function(x, y) {
	if(x > y) return 1;
	if(x < y) return -1;
	return 0;
}

console.log(arrayPairSum([4, 11, 1, 3]));
