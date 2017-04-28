let compare = function (x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
}
 
var hIndex = function(citations) {
    citations = citations.sort(compare);
    let max_h = 0;
    let begin = 0, end = citations.length - 1;
    //console.log(citations);
    while(begin <= end) {
        //console.log(begin + "," + end);
        let mid = Math.floor((end + begin ) / 2);
        let sum = citations[mid] + mid;
        if(sum >= citations.length) {
            let h_this = citations.length - mid;
            if(h_this > max_h) {
                max_h = h_this;
            }
            if(sum === citations.length) {
                break;
            }
            end = mid - 1;
        } else {
            begin = mid + 1;
        }
    }
    return max_h;    
};