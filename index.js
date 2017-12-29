function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("div.target");
}

function increaseRankBy(n) {
  const rankedList = document.getElementById("app").querySelectorAll("ul.ranked-list li");
  
  for (var i = 0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n;
  }
}

function deepestChild() {
  var child = document.getElementById('grand-node');
  var next = child.children[0];
  while (next) {
    child = next;
    next = child.children[0];
  }
  return child;
}