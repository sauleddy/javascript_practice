/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
 	let s_splite = s.split(/\S+/);
 	console.log(s_splite);
 	return s_splite.length - 1;
};

console.log(countSegments("  a   bddd  dsj           "));