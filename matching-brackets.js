//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (input) => {
  let stack = new Stack();
  for(let i = 0; i < input.length; i++){
    switch(input[i]){
      case '}':
        if(stack.pop() !== '{') return false; break;
      case ']':
        if(stack.pop() !== '[') return false; break;
      case ')':
        if(stack.pop() !== '(') return false; break;
      default:
        if(input[i] == '(' || input[i] == '[' || input[i] == '{') stack.push(input[i]);
    }
  }
  return stack.isEmpty();
};

export class Stack{

  constructor(){
    this.items = [];
  }
  
  push(item){
     this.items.push(item);
  }

  pop(){
    return this.items.pop();
  }

  peek(){
    return this.items[this.items.length - 1];
  }

  isEmpty(){
    return this.items.length == 0;
  }
}
