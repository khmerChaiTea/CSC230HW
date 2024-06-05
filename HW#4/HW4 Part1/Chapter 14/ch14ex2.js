function byTagName(node, tagName) {
  var elements = [];

  // Define inner recursive function
  function findElements(currentNode) {
    // Check if the current node is an element and matches the tag name
    if (
      currentNode.nodeType === Node.ELEMENT_NODE &&
      currentNode.nodeName.toLowerCase() === tagName.toLowerCase()
    ) {
      elements.push(currentNode);
    }

    // Recursively search through child nodes
    for (var i = 0; i < currentNode.childNodes.length; i++) {
      findElements(currentNode.childNodes[i]);
    }
  }

  // Start the recursive search from the provided node
  findElements(node);

  return elements;
}

// Example usage:
console.log(byTagName(document.body, "h1").length); // → 1
console.log(byTagName(document.body, "span").length); // → 3
let para = document.querySelector("p");
console.log(byTagName(para, "span").length); // → 2
