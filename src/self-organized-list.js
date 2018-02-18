class Node {
constructor(data) {
this.data = data;
this.next = null;
this.prev = null;
}
}

class SelfOrganizedList {
constructor() {
this.lenght=0;
this.head = null;
this.tail = null;
}

insert(data) {
var node= new Node(data);
if(this.lenght)
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
if(this.length===0){
return 0;
}
return this.lenght;
}

at(index) {
var i=0;
var node=this.head;
if( this.lenght==0||index>this.lenght||index<0)
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
for(var i=0;i<this.lenght;i++)
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

moveToFront(node)
{
var tmp,zn=node.data;
while(node!=this.head)
{
tmp = node.prev.data;
node.prev.data = node.data;
node.data = tmp;
node=node.prev;
}
this.head.data=zn;
}

reorganize(data) {
if(this.lenght==0)
return false;
if(this.findNode(data))
{
this.moveToFront(this.findNode(data));
return true;
}
return false;
}

}

module.exports = {
SelfOrganizedList,
Node
};
