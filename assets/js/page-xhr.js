var fnObj = {};

fnObj.pageStart = function () {
  console.log("pageStarted");
  fnObj.init();
};

fnObj.init = function () {
  fnObj.getUsers();
};

fnObj.getUsers = function () {
  $.ajax({ url: "http://localhost:3000/users" }).done(function (data) {
    console.log(data);
    $("#users-target").html(
      "<ul>" +
        data
          .map(function (item) {
            return "<li>Name : " + item.name + "</li>";
          })
          .join("") +
        "</ul>"
    );
  });
};

$(document).ready(fnObj.pageStart);
