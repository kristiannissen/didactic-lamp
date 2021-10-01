/* Navigation for mobile */
document.addEventListener("DOMContentLoaded", function () {
  var b = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  if (b.length > 0) {
    b.forEach(function (elm) {
      elm.addEventListener("click", function () {
        var t = document.getElementById(elm.dataset.target);
        elm.classList.toggle("is-active");
        t.classList.toggle("is-active");
      });
    });
    var a = Array.prototype.slice.call(
      document.querySelectorAll("#main-nav .navbar-item"),
      0
    );
    a.forEach(function (elm) {
      elm.addEventListener("click", function (evnt) {});
    });
  }
});

// jQuery navigation pushstate
function pushPage(uri, title) {
  $("#dyn-main").load(uri + " #dyn-main .container");
  window.history.pushState({ href: uri }, title, uri);
}

$(document).ready(function () {
  $(".navbar .navbar-item")
    .on("click", function (evnt) {
      var navItem = $(evnt.target);
      if (navItem.attr("href") === undefined) {
        navItem = navItem.parent();
      }

      pushPage(navItem.attr("href"));

      return false;
    })
    .each(function (i, item) {
      // For direct traffic
      var item = $(item);
      if (item.attr("href") === location.pathname) {
        item.toggleClass("is-current");
      }
    });
  window.addEventListener("popstate", function (evnt) {
    var t = $(evnt.target);
    if (evnt.state) pushPage(t.attr("href"), "");
  });
});
