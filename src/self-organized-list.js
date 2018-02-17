class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class SelfOrganizedList {
    constructor() {
        this.length=0;
        this.head = null;
        this.tail = null;
    }

    insert(data) {
        var a=new Node(data);
        if(this.length==0) {
            this.head = a;
            this.tail = this.head;
        }
        else{
            this.tail.next=a;
            a.prev=this.tail;
            this.tail=a;
        }
        this.length++;
    }

    size() {
        return this.length;
    }

    at(index) {
    }

    findNode(data) {
    }


    toArray() {
    }

    removeAt(index) {
        if(index<this.length && index>=0){
            this.length--;
        }
    }

    moveToFront(node) {
    }

    reorganize(data) {
    }

}

module.exports = {
    SelfOrganizedList,
    Node
};
