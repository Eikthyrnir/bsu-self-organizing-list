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
var node= new Node(мфдгу);
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
return this.lenght;
}

at(index) {
var curNode =this.head;
lenght=this.lenght;
coun=0;
while(coun<index)
{
curNode=CurNode.next;
coun++;
}
return curNode.data;
}

findNode(data) {
var R = this.head;
while (R!= null)
{ if (ReturnNode.data == data)
{
return R;
}
R = R.next;
}
return null;
}


toArray() {

}

removeAt(index) {

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
