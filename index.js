function getFirstSelector(selector) {
  return document.querySelector(`${selector}`);
}

function nestedTarget() {
  return document.getElementsByTagName('div')[0];
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild() {
  var lis = document.querySelectorAll(`#grand-node div`)
  if (!lis.length) {
    return false;
  } else {
    return lis[lis.length - 1];
  }
}
