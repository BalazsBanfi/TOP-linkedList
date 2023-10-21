function Node(value = null, nextNode = null) {
    return {
        value = value,
        nextNode = nextNode
    }
}

function linkedList() {
    return {
        head = null,

        //append new Node to the end of the list
        append(v) {

            //create new node
            let newNode = Node(v);

            // if empty list, the new node will be the head
            // else the new node goes to the end of the list 
            if (this.head === null) {
                this.head = newNode;
            } else {
                let tail = this.head;
                while (tail.next !== null) {
                    tail = tail.next;
                }
                tail.next = newNode;
            }

        }




        toString() {
            console.log('The list is: ', this);
        }
    }
}




let list = LinkedList()
linkedList.append(8);