'use strict'

let async_base = require('../async_base');

class async_promise extends async_base {
	constructor() {
		super();
	}

	read_file(file_name) {
		let func_read_file = super.read_file;
		return new Promise(function (resolve, reject) {
    	func_read_file(file_name, function(error, data) {
    		if (error) reject(error);
    		resolve(data);
    	});
    });
	}
}

module.exports = async_promise