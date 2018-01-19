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
  var selection = document.querySelector("#grand-node");

  var go = 1;
  
  while (go === 1) {
    if (selection.querySelector('div') === null) {
      go = 0;
    } else {
      selection = selection.querySelector('div');
    }
  }
  
  return selection;
}