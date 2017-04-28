'use strict'

let fs = require('fs');

class async_base {
	constructor() {

	}

	read_file(file_name, cbk) {
		fs.readFile(file_name, function(error, data) {
      cbk(error, data)
    });
	}
}

module.exports = async_base