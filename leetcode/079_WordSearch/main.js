/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
	for(let i=0; i<board.length; ++i) {
		for(let j=0; j<board[0].length; ++j) {
			if(board[i][j] === word[0]) {
				if(validWord(board, i, j, word, 0, new Map()) === true) return true;
			}
		}
	}
	return false;
};

var validWord = function(board, i, j, word, idx, history) {
	if(i < 0 || i >= board.length || j < 0 || j >= board[0].length) return false;
	let key = (i << 16) + j;
	if(history.has(key)) return false;
	if(board[i][j] !== word[idx]) return false;
	if(idx === word.length - 1) return true;
	// console.log(`i:${i},j:${j},idx:${idx}`);
	history.set(key, 1);
	let result = validWord(board, i-1, j, word, idx+1, history) ||
			validWord(board, i, j+1, word, idx+1, history) ||
			validWord(board, i+1, j, word, idx+1, history) ||
			validWord(board, i, j-1, word, idx+1, history);
	if(result === false) history.delete(key);
	return result;
};

console.log(exist(["ABCE","SFCS","ADEE"], "ABCCED"));
// console.log(exist(["ABCE","SFES","ADEE"], "ABCEFSADEESE"));