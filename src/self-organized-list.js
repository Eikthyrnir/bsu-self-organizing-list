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
        var node= new Node(data);
        if(this.length)
        {
            this.tail.next=node;
            node.prev=this.tail;
            this.tail=node;

        }
        else
        {
            this.head=node;
            this.tail=node;
        }
        this.lenght++;
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
        var arr=[];
        var a=this.head;
        for(var i=0;a;i++) {
            arr[i]=a.data;
            a=a.next;
        }
        return arr;
    }

    removeAt(index) {
        if(index<0&&index>=this.length)
            return;

        var a = this.head;
        if(index==0){
            this.head=this.head.next;

            if(this.length>1) {
                this.head.prev = null;
            }
            else {
                this.tail = null;
            }
        }else
            if(index==this.length-1){
                this.tail=this.tail.prev;
                this.tail.next=null;
            }
            else {
                for (var i = 0; i < index; i++) {
                    a = a.next;
                }

                var before = a.prev;
                var after = a.next;
                before.next = after;
                after.prev = before;
            }
        this.length--;
    }

    moveToFront(node) {
        if(this.length==0)
            return;

        var a=this.head;
        while(a){
            if(a==node){
                while(a!=this.head){
                    var tmp=a.data;
                    a.data=a.prev.data;
                    a.prev.data=tmp;
                    a=a.prev;
                }
                return;
            }
            a=a.next;
        }
    }

    reorganize(data) {
        if(this.length==0)
            return false;

        var i=0;
        var a=this.head;
        for(var i=0;i<this.length;i++){
            if(a.data==data){
                this.moveToFront(a);
                return true;
            }
            a=a.next;
        }

        return false;  
    }

}

module.exports = {
    SelfOrganizedList,
    Node
};
