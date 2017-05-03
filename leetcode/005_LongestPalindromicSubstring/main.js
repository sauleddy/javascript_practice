/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
	if(s.length === 0) return '';
	if(s.length === 1) return s;
	let dp = new Array(s.length);
	for(let i=0; i<dp.length; ++i) {
		dp[i] = new Array(s.length).fill(0);
	}
	console.log(dp);
	let left = 0, right = 0, len_max = 1;

	for(let i=0; i<dp.length; ++i) {
		for(let j=0; j<=i; ++j) {
			let findPalindrom = false;
			if(i === j) dp[i][j] = 1;
			else if(i === j + 1) {
				if(s[i] === s[j]) {
					dp[j][i] = 1;
					findPalindrom = true;
				}
			} else {
				if(s[i] === s[j] && dp[j+1][i-1]) {
					dp[j][i] = 1;
					findPalindrom = true;
				}
			}
			if(findPalindrom === true && i - j + 1 > len_max) {
				len_max = i - j + 1;
				left = j;
				right = i;
			}

		}
	}
	console.log(dp);
	return s.slice(left, right+1);
};


console.log(longestPalindrome('cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc'));