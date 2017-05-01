/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let len_total = nums1.length + nums2.length;
	let idx_target = Math.floor((len_total - 1) / 2);
	let idx = [0, 0];
	let target_this = 0;
	// console.log(idx_target);
	for(let i=0; i<=idx_target; ++i) {
	    target_this = findNext(nums1, nums2, idx);
	}
	// console.log(target_this);
	if(len_total % 2 !== 0) return target_this;
	
	return (target_this + findNext(nums1, nums2, idx)) / 2;
};

var findNext = function(nums1, nums2, idx) {
    let target_this = 0;
    if(idx[1] === nums2.length || nums1[idx[0]] <= nums2[idx[1]]) {
		target_this = nums1[idx[0]];
		++idx[0];
	} else {
		target_this = nums2[idx[1]];
		++idx[1];
	}    
    return target_this;
}