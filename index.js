function getFirstSelector(selector) {
 return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  var rankList = document.querySelectorAll(".ranked-list");
  
  for (var i = 0; i < rankList.length; i++) {
    rankList[i].innerHTML = parseInt(rankList[i].innerHTML) + parseInt(n);
  }
}

function deepestChild() {
  const grandNodeList = document.querySelectorAll("#grand-node");

  var go = 1;
  
  while (go === 1) {
    if (grandNodeList.querySelectorAll('div') === undefined) {
      go = 0;
    } else {
      grandNodeList = grandNodeList.querySelectorAll('div');
    }
  }
  
  return grandNodeList;
}