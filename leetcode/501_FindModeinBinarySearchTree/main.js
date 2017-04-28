function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}
 
/**
 * @param {TreeNode} root
 * @param [number] list_inorder
 */
function inorder(root, list_inorder) {
	if(root === null) {
		return;
	}
	inorder(root.left, list_inorder);
	list_inorder.push(root.val);
	inorder(root.right, list_inorder);
} 

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
	let list_result = [];
	if(root === null) {
		return list_result;
	}
    let list_inorder = [];
	inorder(root, list_inorder);
	// console.log(list_inorder);   
	let max = 0;
	let last_idx = 0;
	for(let i=0; i<list_inorder.length; ++i) {
		if(i === list_inorder.length - 1 || list_inorder[i] != list_inorder[i+1]) {
			let num = i - last_idx + 1;
			if(num >= max) {
				if(num > max) {
				    max = num;
				    list_result = [];
				}
				list_result.push(list_inorder[i]);
			}
			last_idx = i + 1;
		}
	}
	return list_result;
};