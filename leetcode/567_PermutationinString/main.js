/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
	if(s2.length < s1.length) return false;
	
	let hash = new Map();
	for(let i=0; i<s1.length; ++i) {
		if(hash.has(s1[i])) hash.set(s1[i], hash.get(s1[i]) + 1);
		else hash.set(s1[i], 1); 
	}

	let sum_s1 = s1.split('').reduce(reduce_help, 0);
	// console.log(s2.slice(0, s1.length));
	let sum_s2 = s2.slice(0, s1.length).split('').reduce(reduce_help, 0);
	// console.log(sum_s2);
	if(sum_s1 === sum_s2 && isPermutation(s2.slice(0, s1.length), new Map(hash))) return true;

	for(let i=s1.length; i<s2.length; ++i) {
		let begin = i - s1.length + 1;
		sum_s2 -= s2[begin-1].charCodeAt(0);
		sum_s2 += s2[i].charCodeAt(0);
		//console.log(i);
		if(sum_s1 === sum_s2 && isPermutation(s2.slice(begin, i+1), new Map(hash))) return true;
	}
	return false;
};

var isPermutation = function(str, hash) {
	console.log(str);
	for(let i=0; i<str.length; ++i) {
		if(hash.has(str[i]) === false) return false;
		let value = hash.get(str[i]);
		if(value <= 0) return false;
		hash.set(str[i], value - 1);
	}
	return true;
};


var reduce_help = function(x1, x2) {
	if(typeof x1 === 'string') {
		return x1.charCodeAt(0) + x2.charCodeAt(0);
	} else {
		return x1 + x2.charCodeAt(0);
	}
}

// let str_test = 'abc';
// console.log(str_test.charCodeAt(0));
console.log(checkInclusion('abi', 'abidbaooo'));