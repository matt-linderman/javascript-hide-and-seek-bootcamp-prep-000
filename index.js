function getFirstSelector(selector) {
 return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  var rankList = document.querySelectorAll(".ranked-list")
  
  for (var i = 0; i < rankList.length; i++) {
    rankList[i].innerHTML = parseInt(rankList[i].innerHTML) + parseInt(n)
  }
}

function deepestChild() {
  var grandNodeList = document.querySelectorAll("#grand-node");
  for (var i = 0; i < grandNodeList.length; i++) {
    if (grandNodeList[i].child === undefined) {
      return grandNodeList[i]
    } else {
      grandNodeList = grandNodeList[i].child
    }
    var layer = grandNodeList[i].child 
  }
}