/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
	let result = 0;
	let mapLast = new Map([[0, 1]]);
	for(let i=0; i<nums.length; ++i) {
		let mapTemp = new Map([[0, 1]]);
		for(let entry of mapLast.entries()) {
			let key_new = entry[0] + nums[i];
			if(key_new > k && nums[i] > 0) continue;
			if(key_new === k) result += entry[1];
			mapTemp.set(key_new, entry[1]);
		}
		if(mapTemp.size === 0) break;
		mapLast = mapTemp;
	}
	return result;
};

var incMapValue = function(mapSumNum, key, incValue) {
	if(mapSumNum.get(key) === undefined) mapSumNum.set(key, incValue);
	else {
		mapSumNum.set(key, mapSumNum.get(key) + incValue);
	}
}


// let mapTest = new Map([[1, 2], [3, 4]]);
// console.log(mapTest.keys());
console.log(subarraySum([1, 2, 3], 3));