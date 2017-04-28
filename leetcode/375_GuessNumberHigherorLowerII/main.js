/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {
	let matrix = new Array(n).fill(0).map(row => new Array(n).fill(0));
	let x = 0, y = 0;
	for(let i=1; i<n; ++i) {
		let x = 0, y = i;
		while(y < n) {
			// console.log(x + "," + y);
			let min = Number.MAX_VALUE;
			for(let j=x; j<=y; ++j) {
				let part1 = 0, part2 = 0;
				if(j > 0) part1 = matrix[x][j - 1];
				if(j < y) part2 = matrix[j + 1][y];
				let num_this = Math.max(part1, part2) + (j + 1);
				if(num_this < min) min = num_this;
			}
			matrix[x][y] = min;
			++x;
			++y;
		}
	}
	console.log(matrix);
	return matrix[0][n-1];
};

console.log(getMoneyAmount(20));