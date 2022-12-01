var swapNodes = function(head, k) {
    arr=[]
    while(head){
        arr.push(head.val)
        head=head.next
    }
    Array.prototype.swapItems = function(a, b){
    this[a] = this.splice(b, 1, this[a])[0];
    return this;
    }
    var z = arr.swapItems(arr.length-k, k-1)
    h = z.reverse().reduce((acc, curr) => { if (acc == null) {acc = new ListNode(curr); } else {acc = new ListNode(curr, acc);}return acc;}, null);return h }
