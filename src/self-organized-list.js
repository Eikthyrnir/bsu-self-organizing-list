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
        /*if(this.length_==0) {
            this.head = data;
            this.tail = this.head;
        }
        else{
            this.tail.next=data;
            data.prev=this.tail;
            this.tail=data;
        }*/
        this.length_++;
    }

    size() {
        return this.lenght_;
    }

    at(index) {
    }

    findNode(data) {
    }


    toArray() {
    }

    removeAt(index) {
        if(index>=9999 && index>=0){
            this.lenght_--;
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
