/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	let stack = [];
    let dict = {'(': ')', '{': '}', '[': ']'};
	for(let i=0; i<s.length; ++i) {
		if(s[i] === '{' || s[i] === '(' || s[i] === '[') {
			stack.push(s[i]);
		} else {
			// console.log(stack[stack.length-1]);
			if(dict[stack[stack.length-1]] !== s[i]) {
			    // console.log(stack[stack.length-1] + "," + s[i]);
				return false;
			} else {
				stack.pop();	
			}
		}
	}
	// console.log(stack);
	if(stack.length === 0) {
		return true;
	} else {
		return false;
	}
};