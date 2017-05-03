/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
	let s = '1';
	for(let i=1; i<n; ++i) {
		let s_temp = '';
		let s_cur = s[0];
		let s_num = 1;
		// console.log(s_temp);
		for(let j=1; j<s.length; ++j) {
			if(s[j] !== s_cur) {
				s_temp += `${s_num}${s_cur}`;
				s_cur = s[j];
				s_num = 1;
			} else {
				++s_num;
			}
		}
		s_temp += `${s_num}${s_cur}`;
		s = s_temp;
	} 
	return s;  
};

console.log(countAndSay(6));