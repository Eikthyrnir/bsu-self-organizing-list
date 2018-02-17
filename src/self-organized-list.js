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
        }
        var i=0;
        var a=this.head;
        while(i<index){
            a=a.next;
            i++;
        }
        return a.data;
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
        if(index<0&&index>=this.length)
            return;
        
        // JavaScript source code
var currentNode = this.head,
    length = this.length,
    count = 1,
    message = { failure: 'Failure: non-existent node in this list.' },
    beforeNodeToDelete = null,
    nodeToDelete = null,
    deletedNode = null;

// 2-ой случай: первый узел удален
if (index === 1) {
    this.head = currentNode.next;

    // 2-ой случай: существует второй узел
    if (!this.head) {
        this.head.previous = null;
        // 2-ой случай: второго узла не существует
    } else {
        this.tail = null;
    }

    // 3-ий случай: последний узел удален
} else if (index === this.length) {
    this.tail = this.tail.previous;
    this.tail.next = null;
    // 4-ый случай: средний узел удален
} else {
    while (count < index) {
        currentNode = currentNode.next;
        count++;
    }

    beforeNodeToDelete = currentNode.previous;
    nodeToDelete = currentNode;
    afterNodeToDelete = currentNode.next;

    beforeNodeToDelete.next = afterNodeToDelete;
    afterNodeToDelete.previous = beforeNodeToDelete;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
}

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
