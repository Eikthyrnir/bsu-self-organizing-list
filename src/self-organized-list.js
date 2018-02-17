class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class SelfOrganizedList {
    constructor() {
        this.lenght_=0;
        this.head = null;
        this.tail = null;
    }

    insert(data) {
        if(this.length_==0) {
            this.head = instanceOf(data);
            this.tail = this.head;
        }
        else{
            this.tail.next=instanceOf(data);
            data.prev=this.tail;
            this.tail=instanceOf(data);
        }
        this.length_++;
    }

    size() {
        //return this.lenght_;
    }

    at(index) {
    }

    findNode(data) {
    }


    toArray() {
    }

    removeAt(index) {
            //this.lenght_--;
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
