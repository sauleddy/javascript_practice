'use strict'

let async_base = require('../async_base');
let async_promise = require('../promise/async_promise.js');

class async_generator extends async_base {
	constructor() {
		super();
		this.asyncPromise = new async_promise();
	}

	*read_file(file_name) {
		var file2 = yield this.asyncPromise.read_file(file_name);
		yield this.asyncPromise.read_file(file2);
	}
}

module.exports = async_generator