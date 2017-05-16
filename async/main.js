
'use strict'

/**
 * async. callback testbed 
 */
// let async_cbk = require('./callback/async_cbk');
// let asyCbk = new async_cbk();
// asyCbk.read_file('/etc/fstab', function (error, data) {
// 	//console.log(data.toString());
// 	asyCbk.read_file('/etc/shells', function (error, data) {
// 		//console.log(data.toString());	
// 	})
// });

/**
 * async. promise testbed 
 */
// let async_promise = require('./promise/async_promise');
// let asyPromise = new async_promise();
// let my_promise = asyPromise.read_file('/etc/fstab');

// my_promise
// .then(function (data) {
// 	//console.log(data.toString());
// 	return asyPromise.read_file('/etc/shells');
// })
// .then(function (data) {
// 	//console.log(data.toString());
// });

/**
 * async. generator testbed 
 */
// let async_generator = require('./generator/async_generator');
// let asyGenerator = new async_generator();
// let gen = asyGenerator.read_file('/etc/fstab');
// let obj_gen = gen.next();
// obj_gen.value
// .then(function (data) {
// 	//console.log(data.toString());
// 	return gen.next('/etc/shells').value;
// }).then(function (data) {
// 	//console.log(data.toString());
// });

/**
 * async. async testbed 
 */
let async_async = require('./async/async_async');
let asyAsync = new async_async();
asyAsync.read_file('/etc/fstab', '/etc/shells');
