function checkThis() {
  return this;
}

var fn1 = {
  name: "fn1",
  fn2: {
    name: "fn2",
    checkThis: function () {
      return this;
    },
  },
};
