"use strict";

var queue = require("../es-collections/src/Queue");

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function isSymmetric(root) {
	if (root === null) {
		return true;
	}
	var q_nodes = new queue();
	q_nodes.enqueue(root);

	var valid_layer = false;
	while (q_nodes.size > 0) {
		var node_front = q_nodes.peek();
		q_nodes.dequeue();
		if (node_front === null) {
			continue;
		}
		console.log(node_front.val);
		if (node_front.left !== null || node_front.right !== null) {
			valid_layer = true;
		}
		q_nodes.enqueue(node_front.left);
		q_nodes.enqueue(node_front.right);
	}
	return true;
};

var q_test = new queue();
q_test.enqueue(4);
