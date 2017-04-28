'use strict';

let instance = null;
const enforcer_valid = new Object();

class logger {
	constructor(enforcer) {
		if(enforcer != enforcer_valid) {
			throw new Error('Cannot constructor singleton');
		}
	}

	static get_instance() {
		if(instance == null) {
			instance = new logger(enforcer_valid);
		}
		return instance;
	}

	print(text) {
		let log_text = `[${new Date().toLocaleString()}] ${text}`;
		console.log(log_text);
	}
}

module.exports = logger;

