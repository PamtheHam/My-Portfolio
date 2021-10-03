// document.addEventListener("DOMContentLoaded", function () {
//   var elems = document.querySelectorAll(".sidenav");
//   var instances = M.Sidenav.init(elems, options);
// });

$(document).ready(function () {
  $(".sidenav").sideNav({
    menuWidth: 300, // Default is 240
    edge: "left",
    draggable: true,
  });
});
