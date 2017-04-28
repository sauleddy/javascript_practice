/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
	let result = [];
	let dict = {};
	for(let i=0; i<strs.length; ++i) {
		let str_sorted = strs[i].split('').sort().join('');
		// console.log(str_sorted);
		if(dict[str_sorted] != undefined) {
			result[dict[str_sorted]].push(strs[i]);	
		} else {
			result.push([strs[i]]);
			dict[str_sorted] = result.length - 1;
		}
	}
	// console.log(result);
	return result    
};

// let str_test = "bca";
// console.log(str_test.split('').sort().join(''));
groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
