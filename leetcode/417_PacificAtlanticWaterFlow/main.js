/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

var Status = Object.freeze({
    "inland":0,
    "pacific":1,
    "atlantic":2,
    "both":3
});

var pacificAtlantic = function(matrix) {
    let len_row = matrix.length;
    if(len_row === 0 || matrix[0].length === 0) {
    	return [];
    }
    let len_col = matrix[0].length;
    let visited = [];
    for(let i=0; i<len_row; ++i) {
    	visited.push(new Array(len_col).fill(Status.inland));
    }
    let list_result = [];
    for(let idx_col = 0; idx_col < len_col; ++idx_col) {
    	help(matrix, visited, Status.pacific, 0, idx_col);
    }
    for(let idx_row = 0; idx_row < len_row; ++idx_row) {
    	help(matrix, visited, Status.pacific, idx_row, 0);
    }
    for(let idx_col = 0; idx_col < len_col; ++idx_col) {
    	help(matrix, visited, Status.atlantic, len_row - 1, idx_col);
    }
    for(let idx_row = 0; idx_row < len_row; ++idx_row) {
    	help(matrix, visited, Status.atlantic, idx_row, len_col - 1);
    }
    // console.log(visited);
    for(let idx_row=0; idx_row<len_row; ++idx_row) {
    	for(let idx_col=0; idx_col<len_col; ++idx_col) {
    		if(visited[idx_row][idx_col] === Status.both) {
    			list_result.push([idx_row, idx_col]);
    		}
    	}	
    }
    return list_result; 
};

let help = function(matrix, visited, target, idx_row, idx_col) {
	let len_row = matrix.length;
	let len_col = matrix[0].length;
	// console.log(idx_row + "," + idx_col);
	// console.log(target);
    /*if(idx_row < 0 || idx_row >= len_row || idx_col < 0 || idx_col >= len_col) {
		return;
	}*/
	// console.log(visited[idx_row][idx_col]);
	if((visited[idx_row][idx_col] & target) === target) {
	    return;
	}
	visited[idx_row][idx_col] |= target;
	// console.log(visited[idx_row][idx_col]);
	if(idx_col < len_col - 1 && matrix[idx_row][idx_col + 1] >= matrix[idx_row][idx_col]) {
		help(matrix, visited, target, idx_row, idx_col + 1);	
	}
	if(idx_row < len_row - 1 && matrix[idx_row + 1][idx_col] >= matrix[idx_row][idx_col]) {
		help(matrix, visited, target, idx_row + 1, idx_col);
	}
	if(idx_col > 0 && matrix[idx_row][idx_col - 1] >= matrix[idx_row][idx_col]) {
		help(matrix, visited, target, idx_row, idx_col - 1);
	}
	if(idx_row > 0 && matrix[idx_row - 1][idx_col] >= matrix[idx_row][idx_col]) {
		help(matrix, visited, target, idx_row - 1, idx_col);
	}
};