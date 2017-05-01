/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
	let num_row = nums.length; 
	let num_col = nums[0].length;
	if(num_row * num_col !== r * c) return nums;
	let result = [];
	let pos_cur = [0, 0];
	for(let i=0; i<r; ++i) {
		let row_this = [];
		while(row_this.length < c) {
			// console.log(row_this);
			// console.log(pos_cur);
			let len_remain = c - row_this.length;
			if(num_col - pos_cur[1] > len_remain) {
				row_this = row_this.concat(nums[pos_cur[0]].slice(pos_cur[1], pos_cur[1] + len_remain));
				pos_cur[1] += len_remain;
			} else {
				row_this = row_this.concat(nums[pos_cur[0]].slice(pos_cur[1]));
				++pos_cur[0];
				pos_cur[1] = 0;
			}

			if(row_this.length === c) {
				result.push(row_this);
				break;
			}
		}

	}
	return result;	 
};

console.log(matrixReshape([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]], 4, 5));