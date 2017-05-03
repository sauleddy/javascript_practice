/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
	if(n <= 1) return 0;
	let prime = [];
	for(let i=2; i<n; ++i) {
		if(isPrime(i, prime)) {
			prime.push(i);
		}
	}
	console.log(prime);
	return prime.length;
};

var isPrime = function(num, prime) {
	let upper = Math.floor(Math.sqrt(num));
	for(let i=0; i<prime.length; ++i) {
		if(prime[i] > upper) return true;
		if(num % prime[i] === 0) return false;
	}
	return true;
}

console.log(countPrimes(2));