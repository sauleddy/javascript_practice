/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
	let hash = new Map();
	for(let i=0; i<wall.length; ++i) {
		let sum = 0;
		for(let j=0; j<wall[i].length; ++j) {
			sum += wall[i][j];
			if(hash.has(sum)) {
				hash.set(sum, hash.get(sum)+1);
			} else { 
				hash.set(sum, 1);
			}
		}
		console.log(hash);
	}
	let max_break = 0;
	for(let entry of hash.entries()) {
		// console.log(entry);
		if(entry[0] !== wall.length && entry[1] > max_break) {
			max_break = entry[1];
		}
	}
	return wall.length - max_break;
};


/*console.log(leastBricks(
 [[6], [6], [2, 4], [6], [1, 2, 2, 1], [6], [2, 1, 2, 1], [1, 5], [4, 1, 1], [1, 4, 1], [4, 2], [3, 3], [2, 2, 2], [5, 1], [5, 1], [6], [4, 2], [1, 5], [2, 3, 1], [4, 2], [1, 1, 4], [1, 3, 1, 1], [2, 3, 1], [3, 3], [3, 1, 1, 1], [3, 2, 1], [6], [3, 2, 1], [1, 5], [1, 4, 1]]));*/

 console.log(leastBricks([
 [1,2,2,1],
 [3,1,2],
 [1,3,2],
 [2,4],
 [3,1,2],
 [1,3,1,1]]));