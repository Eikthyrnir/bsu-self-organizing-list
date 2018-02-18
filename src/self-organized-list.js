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
        var arr=[];
        var a=this.head;
        for(var i=0;a;i++) {
            arr[i]=a.data;
            a=a.next;
        }
        return arr;
    }

    removeAt(index) {
        let n=this.head;
        let coun=0;
        if (index == this.length - 1)
        {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        else{
            if (index == 0)
            {
                this.head = this.head.next;
                this.head.prev = null;
            }else{
            while(coun<index)
            {
                coun++;
                n=n.next;
            }
            n.next.prev = n.prev;
            n.prev.next = n.next;
        }
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
