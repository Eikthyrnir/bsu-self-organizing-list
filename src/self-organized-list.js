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
        this.length++;
    }

    size() {
        if(this.length===0){
            return 0;
        }
        return this.length;
    }

    at(index) {
        var i=0;
        var node=this.head;
        if( this.length==0||index>this.length||index<0)
        { return null;

        }
        if(index==0)
            return this.head.data;
        else
        {
            for(;i<index;i++)
                node=node.next;
            return node.data;
        }
    }

    findNode(data) {
        var r = this.head;
        for(var i=0;i<this.length;i++)
        { if (r.data == data)
        {
            return r;
        }
            r = r.next;
        }
        return null;
    }


    toArray() {
        var pushnod=this.head;
        var masss = [];
        while (pushnod!= null) {
            masss.push(pushnod.data);
            pushnod = pushnod.next;
        }
        return masss;
    }

    removeAt(index) {
        let n = this.head;
        let coun = 0;
        if (index == this.length - 1) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        else
            if (index == 0) {
                this.head = this.head.next;
                this.head.prev = null;
            }/*else{
                while (coun < index) {
                    coun++;
                    n = n.next;
                }
                n.next.prev = n.prev;
                n.prev.next = n.next;
            }*/
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
