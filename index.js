function LinkedList() {
  let listSize = 0;

  let firstNode;
  let lastNode;

  const checkFirstLast = (node) => {
    listSize == 0 ? (firstNode = node) : (lastNode = node);
  };

  const append = (node) => {
    if (listSize == 0) {
      lastNode = node;
      firstNode = node;
      node.nextNode = null;
      listSize++;
      return;
    } else if (listSize == 1) {
      lastNode = node;
      firstNode.nextNode = lastNode;
      lastNode.nextNode = null;
      listSize++;
      return;
    } else {
      let indexNode = firstNode;

      for (let index = 0; index < listSize; index++) {
        if (indexNode.nextNode == null) {
          //   console.log("reached last node", indexNode);
          //   console.log("counter is", index);
          lastNode = node;
          indexNode.nextNode = lastNode;
          listSize++;
          return;
        }
        indexNode = indexNode.nextNode;
      }
      //   while (indexNode != lastNode) {
      //     // indexNode = indexNode.nextNode;
      //     if (indexNode.nextNode == null) {
      //       indexNode = lastNode;
      //       lastNode = node;
      //       lastNode.nextNode = null;
      //       listSize++;
      //       return 1;
      //     }
      //     indexNode.nextNode;
      //   }
    }
    // if (lastNode) {
    //   lastNode.nextNode = node;
    // }
    // checkFirstLast(node);
    // node.nextNode = null;
    // listSize++;
  };

  const prepend = (node) => {
    node.nextNode = firstNode;
    firstNode = node;
    listSize++;
  };

  const size = () => {
    return listSize;
  };

  const head = () => {
    return firstNode;
  };

  const tail = () => {
    return lastNode;
  };

  const atIndex = (index) => {
    if (index == 0) {
      return firstNode;
    } else if (index == listSize) {
      return lastNode;
    } else {
      //iterate through list setting indexNode to the next node until we reach the index;
      let indexNode = firstNode;
      for (let counter = 0; counter < index; counter++) {
        indexNode = indexNode.next;
      }
      return indexNode;
    }
  };

  const pop = () => {
    // iterate until second to last item is reached then set node.next to null;
    // and then setting lastNode to indexnode;
    if (listSize == 0) {
      return;
    } else if (listSize == 1) {
      lastNode = null;
      firstNode = null;
      return;
    } else if (listSize > 1) {
      let indexNode = firstNode;
      while (indexNode != lastNode) {
        if (indexNode.nextNode == lastNode) {
          lastNode = indexNode;
          lastNode.nextNode = null;
          return;
        }
        indexNode = indexNode.nextNode;
      }
    }
  };

  const contains = (value) => {
    let indexNode = firstNode;
    while (indexNode != null) {
      if (indexNode.value == value) {
        return true;
      } else if (indexNode == lastNode && indexNode.value != value) {
        return false;
      }
      indexNode = indexNode.nextNode;
    }
  };
  const find = (value) => {
    let indexNode = firstNode;
    for (let counter = 0; counter < listSize; counter++) {
      if (indexNode.value == value) {
        return counter;
      } else if (counter == listSize - 1 && indexNode.value != value) {
        return null;
      }
      indexNode = indexNode.next;
    }
  };

  const toString = () => {
    let indexNode = firstNode;

    while (indexNode != null) {
      process.stdout.write(`( ${indexNode.value} ) ->`);
      indexNode = indexNode.nextNode;
    }

    // for (let counter = 0; counter < listSize; counter++) {
    //   console.log(`( ${indexNode.value} ) ->`);
    //   indexNode = indexNode.next;
    // }
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    atIndex,
    pop,
    contains,
    find,
    toString,
  };
}

function createNode(value = null, nextNode = null) {
  return {
    value,
    nextNode,
  };
}

const list = new LinkedList();

list.append(createNode("dog"));
list.prepend(createNode("cat"));
list.append(createNode("parrot"));

// console.log(list.head(), list.tail());
// console.log(list.size());

// list.append(createNode("cat"));
// list.append(createNode("parrot"));
list.append(createNode("hamster"));
list.append(createNode("snake"));
list.append(createNode("turtule"));
list.pop();

console.log(list.contains("joaquin"));

console.log(list.toString());
