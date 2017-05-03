function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
	if(head === null || head.next === null) return head;
	let splite = [];
	let cur = head;
	while(cur !== null) {
		splite.push(cur);
		cur = cur.next;
		splite[splite.length-1].next = null;
	}
	if(splite.length % 2 !== 0) {
		if(splite[splite.length-2] <= splite[splite.length-1]) {
			splite[splite.length-2].next = splite[splite.length-1];	
		} else {
			splite[splite.length-1].next = splite[splite.length-2];
			splite[splite.length-2] = splite[splite.length-1];
		}
		splite.pop();
	}
	console.log(splite);
	while(splite.length > 1) {
		let length_this = splite.length;
		for(let i=0; i<splite.length; i+=2) {
			splite.push(merge(splite[i], splite[i+1]));
		}
		splite = splite.slice(splite.length);
	}
	return splite[0];
};

var merge = function(list1, list2) {
	let head = new ListNode(0);
	let new_cur = head;
	let cur_1 = list1, cur_2 = list2;
	while(cur_1 !== null && cur_2 !== null) {
		if(cur_1.val <= cur_2.val) {
			new_cur.next = cur_1;
			cur_1 = cur_1.next;
		} else {
			new_cur.next = cur_2;
			cur_2 = cur_2.next;
		}
		new_cur = new_cur.next;
		new_cur.next = null;
	}
	if(cur_1 !== null) new_cur.next = cur_1;
	else new_cur.next = cur_2;
	return head->next;
}