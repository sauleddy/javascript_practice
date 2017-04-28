'use strict';

let base = require('./base');

class derived extends base {
	
	constructor(x) {
		//console.log('[derived::constructor]');
		super(x);
		this._derived_x = x + 10;
	}

	get derived_x() {
		console.log('[derived::get derived_x()]');
		return this._derived_x;
	}

	set derived_x(value) {
		console.log('[derived::set derived_x()]');
		this._derived_x = value;
	}

	add(x, y) {
		//console.log('[derived::add]');
		return super.add(x, y);
	}

	/**
	 * Define static function
	 */
	static static_add(x, y) {
		return x + y;
	}
}

/**
 * Define static variable
 */
derived.static_x = 200;

module.exports = derived;