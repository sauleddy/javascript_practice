/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
	if(s.length <= 1) return false;
	let divisor = 2;
	let sub_length = s.length / divisor++;
	while(sub_length >= 1) {
		if(Number.isInteger(sub_length)) {
			let sub_str = s.slice(0, sub_length);
			console.log(sub_str);
			for(let i=sub_length; i<s.length; i+=sub_length) {
				if(sub_str !== s.slice(i, i + sub_length)) break;
				if(i === s.length - sub_length) return true;
			}
		}
		sub_length = s.length / divisor++;
	}
	return false;
};

console.log(repeatedSubstringPattern('abab'));