const oneNode = (value = null, nextNode = null) => {
  return {
    value,
    nextNode,
  };
};

const linkedList = () => {
  let head = null;
  let length = 0;
  //append new Node to the end of the list

  const append = (value) => {
    //create new node
    const newNode = oneNode(value);
    length++;
    // if empty list, the new node will be the head
    // else the new node goes to the end of the list
    if (head === null) {
      return (head = newNode);
    } else {
      let tail = head;
      while (tail.nextNode !== null) {
        tail = tail.nextNode;
      }
      tail.nextNode = newNode;
    }
  };

  const prepend = (value) => {
    //create new node
    const newNode = oneNode(value);
    length++;
    // if empty list, the new node will be the head
    // else the new node goes to the end of the list
    if (head === null) {
      return (head = newNode);
    } else {
      let tail = head;

      head = newNode;
      head.nextNode = tail;
    }
  };

  const size = () => {
    console.log("Total nodes in list: "+length);
    //return length;
  };

  const headNode = () => {
    console.log("The first node in list: ", head.value, " ", head);
    //return head;
  };

  const tailNode = () => {
    let tail = null;
    if (head === null) {
      return null;
    } else {
      tail = head;
      while (tail.nextNode !== null) {
        tail = tail.nextNode;
      }
    }
    console.log("The last node in list: ", tail.value, " ", tail);
    //return head;
  };


  const atNode = (l) => {
    let tail = null;
    if (head === null || l < 1) {
      return null;
    } else {
      tail = head;
      for (let i = 1; i < l; i++) {
        if (!tail.nextNode) {
          console.log(l + ' is out of range, max value: ' + length);
          return null;
        }
        tail = tail.nextNode;
      }
    }
    console.log('The '+l+'. node in list: '+ tail.value, tail);
    //return tail;
  };

  const pop = () => {
    let tail = null;
    if (head === null) {
      return null;
    } else {
      tail = head;
      for (let i = 1; i < length; i++) {
        tail = tail.nextNode;
        console.log(tail.value);
      }
      return tail;

    }
  };


  const toString = () => {
    let string1 = "Node: " + head.value;
    let tail = head;
    while (tail.nextNode) {
      string1 += " --> Node: " + tail.nextNode.value;
      tail = tail.nextNode;
    }
    console.log(string1);
    return string1;
  };

  return {
    head,
    append,
    prepend,
    length,
    size,
    headNode,
    tailNode,
    atNode,
    pop,
    toString,
  };
};

const list = linkedList();

list.prepend(4);
list.append(5);
list.append(6);
list.append(7);
list.prepend(3);
list.prepend(2);
list.prepend(1);

list.size();
list.headNode();
list.tailNode();
list.atNode(-2);
list.atNode(5);
list.atNode(2);
list.atNode(8);
list.pop();
list.toString();