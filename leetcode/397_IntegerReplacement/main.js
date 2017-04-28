/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
	let map_history = new Map();
	map_history.set(1, 0);
	return help(n, map_history);
};

var help = function(n, map_history) {
	if(map_history.has(n)) {
		return map_history.get(n);
	}
	let num = 0;
	if(n % 2 === 0) {
		num = help(n / 2, map_history) + 1;
	} else {
		num = Math.max(help(n + 1, map_history), help(n - 1, map_history)) + 1;
	}
	map_history.set(n, num);
	return num;
};