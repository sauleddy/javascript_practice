/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
	let splites = s.split(' ');
	for(let i=0; i<splites.length; ++i) {
		// console.log(reverseWord(splites[i]));
		splites[i] = reverseWord(splites[i]);
	}
	return splites.join(' ');
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseWord = function(s) {
	return s.split('').reverse().join('');
}

let str_test = `Let's take LeetCode contest`;
console.log(reverseWords(str_test));