"use strict";

var queue = require("../es-collections/Queue");

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
	if (root === null) {
		return true;
	}
	let q_nodes = []
	q_nodes.push(root);

	let valid_layer = false;
	let length_layer = q_nodes.length;
	while (q_nodes.length > 0) {
		let node_front = q_nodes[0];
		q_nodes.shift();
		--length_layer;
		if (node_front !== null) {
			// console.log(node_front.val);
    		if (node_front.left !== null || node_front.right !== null) {
    			valid_layer = true;
    		}
    		q_nodes.push(node_front.left);
    		q_nodes.push(node_front.right);
    		
		}
		
		if(length_layer === 0) {
			if(valid_layer === false) {
				break;
			}
			for(let i=0; i<q_nodes.length/2; ++i) {
			    // console.log(i);
			    // console.log(q_nodes.length-1-i);
			    
			    if(q_nodes[i] === null && q_nodes[q_nodes.length-1-i] === null) {
			        continue;
				} else if(q_nodes[i] !== null && q_nodes[q_nodes.length-1-i] !== null) {
				    if(q_nodes[i].val !== q_nodes[q_nodes.length-1-i].val) {
				        return false;
				    }
				} else {
				    return false;
				}
			}
			length_layer = q_nodes.length;
			valid_layer = false;
		}
	}
	return true;
};

let q_test = new queue();
q_test.enqueue(4);
console.log(q_test.size);