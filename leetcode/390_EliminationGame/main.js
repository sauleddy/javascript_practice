/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
	let begin = 1;
	let dist = 1;
	let num_remain = n;
	let run = 1;
	while(begin + dist <= n) {
		if(num_remain % 2 === 0) {
			if(run % 2 !== 0) begin += dist;
		} else {
			begin += dist;
		}
		dist *= 2;
		++run;
		num_remain = Math.floor(num_remain / 2);
		console.log(begin);
		console.log(dist);
		
	} 
	return begin;  
};

console.log(lastRemaining(9));