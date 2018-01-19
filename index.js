function getFirstSelector(selector) {
 return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  var rankList = document.querySelectorAll(".ranked-list")
  
  for (var i = 0; i < rankList.length; i++) {
    rankList.innerHTML = parseInt(rankList.innerHTML) + 1
  }
}