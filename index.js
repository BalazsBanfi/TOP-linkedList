const oneNode = (value = null, nextNode = null) => {
  return {
    value,
    nextNode,
  };
};

const linkedList = () => {
  let head = null;

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

    const toString = () => {
      console.log("aa");
    };
  };
  return {
    append,
    head,
    toString,
  };
};

let list = linkedList();
console.log(list);
list.append(8);
list.append(10);
list.toString();
