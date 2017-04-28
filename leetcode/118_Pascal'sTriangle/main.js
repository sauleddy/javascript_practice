/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
	if(numRows <= 0) return [];
	if(numRows === 1) return [[1]];
	if(numRows === 2) return [[1], [1, 1]];

	let result = [[1], [1, 1]];
	let res_last = [1, 1];
	for(let i=2; i<numRows; ++i) {
		let res_this = [1];
		for(let j=1; j<res_last.length; ++j) {
			res_this.push(res_last[j-1] + res_last[j]);
		}
		res_this.push(1);
		result.push(res_this);
		res_last = res_this;
	}
	return result;
};

console.log(generate(5));