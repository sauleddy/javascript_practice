/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
	str = str.trim();
	console.log(str);
	str = str.replace('\n', ', ');
	console.log(str);
	return str.split(/[\s]+/).reverse().join(' ');
};

console.log(reverseWords(`a
yqo! qjktum ym. .fumuhau`));
//console.log(reverseWords(' '));