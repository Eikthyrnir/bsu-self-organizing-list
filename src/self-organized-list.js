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
        if(index<0||index>=this.length){
            return null;
        }/*
        var i=0;
        var a=this.head;
        while(i<index){
            a=a.next;
            i++;
        }
        return a.data;*/
    }

    findNode(data) {
        var i=0;
        var a=this.head;
        for(var i=0;i<this.length;i++){
            if(a.data==data)
                return a;
            a=a.next;
        }

        return null;
    }


    toArray() {
    }

    removeAt(index) {
        this.length--;
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
