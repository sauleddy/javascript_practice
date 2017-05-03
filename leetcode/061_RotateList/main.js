function ListNode(val) {
    this.val = val;
    this.next = null;
}
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
	if(k === 0 || head === null || head.next === null) return head;
	let cur = head;
	let len = 0;
	while(cur !== null) {
		++len;
		cur = cur.next;
	}
	//console.log(len);
	k = k % len;
	if(k === 0) return head;
	let target = len - k - 1;
	let tail_new = head;
	let tail = head;
	for(let i=0; i<len-1; ++i) {
		tail = tail.next;
		if(i >= k) tail_new = tail_new.next;	
	}
	let head_new = tail_new.next;
	tail_new.next = null;
	tail.next = head;
	return head_new;
};