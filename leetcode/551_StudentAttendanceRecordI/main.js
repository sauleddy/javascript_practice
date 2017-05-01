/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
 	let num_A = 0;
 	for(let i=0; i<s.length; ++i) {
 		if(s[i] === 'A') {
 			++num_A;
 			if(num_A > 1) return false;	
 		} else if(s[i] === 'L') {
 			if(i > 1 && s[i-1] === 'L' && s[i-2] === 'L') return false;
 		}
 	}   
 	return true;
};