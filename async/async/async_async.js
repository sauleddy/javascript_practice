'use strict'

let async_base = require('../async_base');
let async_promise = require('../promise/async_promise.js');

class async_async extends async_base {
	constructor() {
		super();
		this.asyncPromise = new async_promise();
	}

	async read_file(file_name_1, file_name_2) {
		var file1 = await this.asyncPromise.read_file(file_name_1);
		console.log(file1.toString());
		var file2 = await this.asyncPromise.read_file(file_name_2);
		console.log(file2.toString());
	}
}

module.exports = async_async