function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function(root) {
	let result = help(root);
	return result[0];
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var help = function(root) {
	if(root === null) return [0, 0];
	if(root.left === null && root.right === null) return [0, root.val];
	let res_left = help(root.left);
	let res_right = help(root.right);
	let tilt_this = Math.abs(res_left[1] - res_right[1]);
	return [tilt_this + res_left[0] + res_right[0], res_left[1] + res_right[1] + root.val];
}