var fnObj = {};
var user = {
  token: "112233",
  id: "noname",
  weight: 60,
  height: 180
};

fnObj.pageStart = function () {
  console.log("pageStarted");
  fnObj.init();
};

fnObj.init = function () {
  $("#btn-ok").on("click", function (evt) {
    // console.log(evt);
    user.username = $("#username").val();
    fnObj.sendUsername(user);
  });
};

fnObj.sendUsername = function (user) {
  alert(
    user.username +
      ", BMI = " +
      user.weight / (((user.height / 100) * user.height) / 100)
  );
};

$(document).ready(fnObj.pageStart);
