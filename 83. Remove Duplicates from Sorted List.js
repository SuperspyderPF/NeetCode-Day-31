deleteDuplicates = h=> {
    if (!h) return h;
    c = h;
    while (c) {
        if (c.next && c.next.val == c.val) c.next = c.next.next;
        else c = c.next;
    }
    return h
};

//one line:
deleteDuplicates=h=>{if(!h)return h;c=h;while(c){if(c.next&&c.next.val==c.val)c.next=c.next.next;else c=c.next}return h}


