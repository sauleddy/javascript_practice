/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
	if(numRows <= 1) return s;
	let result = [];
	let dist = (numRows - 1) * 2;
	for(let i=0; i<numRows; ++i) {
		let idx = i;
		while(idx < s.length) {
			result.push(s[idx]);
			if(i > 0 && i < numRows - 1) {
				let mid = idx + (numRows - i - 1) * 2;
				if(mid < s.length) result.push(s[mid]);
			}
			idx += dist;
		}
	}
  return result.join('');
};

console.log(convert('PAYPALISHIRING', 4));