/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    // const mode_increase = 0;
    // const mode_decrease = 1;
    if(nums.length <= 1) {
    	return nums.length;
    }
    let idx_cur = 1;
    while(idx_cur < nums.length && nums[idx_cur] === nums[idx_cur-1]) {
    	++idx_cur;
    }
    if(idx_cur === nums.length) {
    	return 1;
    }
    let list_diff = [];
    for(let i=idx_cur; i<nums.length; ++i) {
    	if(nums[i] - nums[i-1] !== 0)
    		list_diff.push(nums[i] - nums[i-1]);
    }
    let result = 2;
    for(let i=1; i<list_diff.length; ++i) {
    	let multiply = list_diff[i] * list_diff[i-1];
    	if(multiply < 0) {
    		++result;
    	}
    }
    return result;
};