function createLinkedList(n1, n2) {
  const listSize = 0;
  let first;
  let last;
  const append = () => {
    if (n2.value) {
      n1.nextNode = n2;
      listSize++;
      if (!first) {
        first = n1;
      }
      last = n2;
    }
  };

  const prepend = () => {
    if (n2.value) {
      n2.nextNode = n1;
      listSize++;
      first = n2;
    }
  };

  const size = () => {
    return listSize;
  };

  const head = () => {
    return first;
  };

  const tail = () => {
    return last;
  };

  const atIndex = (n) => {
    if (n < listSize - n) {
      let tempFirst = first;
      for (let i = 0; i < n; i++) {
        let nextNode = tempFirst.nextNode;
        tempFirst.nextNode = nextNode;
      }
    }
  };

  const pop = () => {
    let tempFirst = first;
    for (let i = 0; i < listSize - 1; i++) {
      nextNode = tempFirst.nextNode;
      if (nextNode === last) {
        nextNode.next = null;
      } else {
        tempFirst.nextNode = tempFirst;
      }
    }
  };

  const contains = (value) => {};
}

function createNode(value, nextNode = null) {
  return {
    value,
    nextNode,
  };
}
