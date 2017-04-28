function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
		if(root === null) return 0;
    let max = [Number.NEGATIVE_INFINITY];
    help(root, max);
    return max[0];
};

/**
 * @param {TreeNode} root
 * @param Number[] max
 * @return {number}
 */
var help = function(root, max) {
	if(root === null) return 0;
	let max_left = help(root.left, max);
	let max_right = help(root.right, max);
	let max_this = root.val;
	if(max_left > 0) max_this += max_left;
	if(max_right > 0) max_this += max_right;
	if(max_this > max[0]) max[0] = max_this;
	return Math.max(root.val, root.val + Math.max(max_left, max_right));
}