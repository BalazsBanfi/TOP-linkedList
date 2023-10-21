const oneNode = (value = null, nextNode = null) => {
  return {
    value,
    nextNode,
  };
};

const linkedList = () => {
  let head = null;
  let size = 0;
  //append new Node to the end of the list
  const append = (value) => {
    //create new node
    const newNode = oneNode(value);
    // if empty list, the new node will be the head
    // else the new node goes to the end of the list
    if (head === null) {
      head = newNode;
    } else {
      let tail = head;
      while (tail.nextNode !== null) {
        tail = tail.nextNode;
      }
      tail.nextNode = newNode;
    }
    size++;
  };
  return {
    head,
    append,
    size,
    toString,
  };
};

let list = linkedList();
console.log(list);
list.append(8);
list.append(10);
list.toString();
console.log(list.size);
console.log(list.nextNode);
