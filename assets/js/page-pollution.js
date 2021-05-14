// case 1
function fn1(a) {
  if (a.t) {
    fn2(a);
  }
  var res = fn3(a);
  console.log(res);
}

function fn2(a) {
  a.name = "thomas";
}

function fn3(a) {
  a.id = "99";
  objArr[3].parent.name = "paul";
  return a;
}

// case 2
var p1 = { name: "tom" };
var p2 = { name: "sam" };
var objArr = [
  { name: "a", parent: p1 },
  { name: "b", parent: p1 },
  { name: "c", parent: p2 },
  { name: "d", parent: p2 },
];

function getArr() {
  return $.each(objArr, function (item) {
    return item;
  });
}

// IIFE
(function () {
  var p1 = "a";
  console.log(p1);
})();
