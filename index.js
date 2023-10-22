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
    console.log("Total nodes in list: " + length);
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
          console.log(l + " is out of range, max value: " + length);
          return null;
        }
        tail = tail.nextNode;
      }
    }
    console.log("The " + l + ". node in list: " + tail.value, tail);
    //return tail;
  };

  const pop = () => {
    let tail = null;
    if (head === null) {
      return null;
    } else {
      tail = head;
      while (tail.nextNode.nextNode) {
        tail = tail.nextNode;
      }
      console.log("Pop: ", tail.nextNode.value, tail.nextNode);
      tail.nextNode = null;
      //return tail;
    }
  };

  const contains = (x) => {
    let tail = null;
    if (head === null) {
      return null;
    } else {
      tail = head;

      while (tail.nextNode) {
        tail = tail.nextNode;
        if (tail.value == x) {
          console.log(x + " is in the list", tail);
          return true;
        }
      }

      console.log(x + " is not in the list");
      return false;
    }
    //return tail;
  };

  const find = (x) => {
    let tail = null;
    if (head === null) {
      return null;
    } else {
      tail = head;
      let i = 1;
      while (tail.nextNode) {
        tail = tail.nextNode;
        if (tail.value == x) {
          console.log(x + " is in the list, no. ", i + 1);
          return;
        }
        i++;
      }

      console.log(x + " is not in the list");
      return;
    }
    //return tail;
  };

  const insertAt = (index, value) => {
    let tail = null;
    const newNode = oneNode(value);
    if (head === null) {
      return null;
    } else {
      tail = head;
      let i = 1;
      while (tail.nextNode) {
        if (i === index) {
          newNode.nextNode = tail.nextNode;
          tail.nextNode = newNode;
          return;
        }
        tail = tail.nextNode;
        i++;
      }

      console.log(x + " is not in the list");
      return;
    }
    //return tail;
  };

  const removeAt = (index) => {
    let tail = null;
    if (head === null) {
      return null;
    } else {
      tail = head;
      let i = 1;
      while (tail.nextNode) {
        if (i === index) {
          tail.nextNode = tail.nextNode.nextNode;
          return;
        }
        tail = tail.nextNode;
        i++;
      }

      console.log(x + " is not in the list");
      return;
    }
    //return tail;
  };

  const toString = () => {
    let string1 = " " + head.value;
    let tail = head;
    while (tail.nextNode) {
      string1 += " --> " + tail.nextNode.value;
      tail = tail.nextNode;
    }
    console.log(string1 + " --> null");
    //return string1;
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
    contains,
    find,
    insertAt,
    removeAt,
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
list.pop();
list.contains(-3);
list.contains(5);
list.contains(20);
list.find(2);
list.find(3);
list.find(5);
list.insertAt(3, 34);
list.toString();
list.removeAt(3);
list.toString();
