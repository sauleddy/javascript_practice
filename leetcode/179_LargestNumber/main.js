/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
	nums = nums.sort(compare);
	if(nums[0] === 0 && nums[nums.length-1] === 0) return '0';
	console.log(nums);
	return nums.join('');
};

var compare = function(num1, num2) {
	let num1First = parseInt(num1.toString() + num2.toString());
	let num2First = parseInt(num2.toString() + num1.toString());
	if(num1First >= num2First) return -1;
	else return 1;
};

// console.log(largestNumber([824,938,1399,5607,6973,5703,9609,4398,8247]));
console.log(largestNumber([2, 10]));