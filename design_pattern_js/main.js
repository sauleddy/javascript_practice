#!/usr/bin/env node

var sleep = require('system-sleep');
var proc = require('process')

/**
 * Test ES6 class
 */
let base = require('./oop/base');
let derived = require('./oop/derived');
let class1 = new derived(10);
let class2 = new derived(20);
// console.log(class1.__proto__ === derived.prototype);
// console.log(Object.getOwnPropertyNames(derived.prototype));
// console.log(class1.__proto__ === class2.__proto__);
// console.log(derived.name);
// console.log(class1 instanceof derived);
// console.log(class1 instanceof base);
// console.log(class1.add(3, 8));
// class1.derived_x = 100;
// console.log(class1.derived_x);
// console.log(class2.derived_x);
// console.log(derived.static_add(1, 2));

/**
 * Test Singleton
 */
let logger = require('./singleton/logger');
// let my_logger = new logger();
logger.get_instance().print('Hello Singleton.');
console.log(logger.get_instance() === logger.get_instance());
