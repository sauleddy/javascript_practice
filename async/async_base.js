'use strict'

let fs = require('fs');
let sleep = require('sleep');

class async_base {
	constructor() {

	}

	read_file(file_name, cbk) {
		//sleep.sleep(3);
    fs.readFile(file_name, function(error, data) {
      cbk(error, data)
    });
	}
}

module.exports = async_base