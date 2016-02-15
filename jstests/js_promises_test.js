function count(n){
  var res = [];
  for (var x = 0; x < n; x++) {
    res.push(x);
  }
  return res;
};
for (var x of count(5)) {
  console.log("x is typeof ",x.typeof);
  console.log("x is ",x);
};

function count(){
  var res = [];
  for (var x = 0; true; x++) {
    res.push(x);
  }
  return res;
}
for (var x of count()) {
  console.log("x is ", x);
}
