'use strict'

let async_base = require('../async_base');

class async_cbk extends async_base {
	constructor() {
		super();
	}

	read_file(file_name, cbk) {
		super.read_file(file_name, cbk);
	}
}

module.exports = async_cbk