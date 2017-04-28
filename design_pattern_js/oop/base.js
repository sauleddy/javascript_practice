'use strict';

class base {
	constructor(x) {
		//console.log('[base::constructor]');
		if(new.target === base) {
			throw new Error('base is an abstract class');
		}
		this.x = x;
	}

	add(x, y) {
		//console.log('[base::add]');
		return private_add.call(this, x, y);
	}
}

/**
 * Define a private function
 */
function private_add(x, y) {
	return x + y;	
}

module.exports = base;

