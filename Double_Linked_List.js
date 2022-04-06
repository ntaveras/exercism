//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prior = null;
  }
}
export class LinkedList {

  constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(value){
    let newNode = new Node(value);
    (this.isEmpty() ? this.head = newNode : this.tail.next = newNode);
    newNode.prior = this.tail;
    this.tail = newNode;
    this.size++;
  }

  pop(){
    return this.popAtIndex(this.size - 1);
  }

  popAtIndex(index){
    if(index >= this.size || index < 0) return 'Out of boundes; please choose a valid Index';
    
    let currenNode = this.head;
    while(index-- > 0) {
      currenNode = currenNode.next;
    }
    switch(currenNode){
      case (this.head):
        this.head = currenNode.next; break;
      case (this.tail):
        this.tail = currenNode.prior; break;
      default:
        currenNode.prior.next = currenNode.next;
        currenNode.next.prior = currenNode.prior;
    }
    this.size--;
    return currenNode.value;
  }

  shift(){
    return this.popAtIndex(0);
  }

  unshift(value){
    let newNode = new Node(value);
    if( !this.isEmpty() ) this.head.prior = newNode;
    newNode.next = this.head;  
    this.head = newNode;
    this.size++;
  }

  delete(value){
    let currentNode = this.head,
        counter = 0;
    
    while(currentNode.value != value && ++counter < this.size){ 
      currentNode = currentNode.next;
    }
    if(currentNode.value == value) this.popAtIndex(counter);
    }

  count(){
    return this.size;
  }

  isEmpty(){
    return (this.size == 0);
  }
  
}
