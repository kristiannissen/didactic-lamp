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
  }
});

// jQuery navigation pushstate
function pushPage(uri) {
  $("#dyn-main").load(uri + " #dyn-main .container");
  window.history.pushState({ href: uri }, "", uri);
}

$(document).ready(function () {
  $(".navbar-item").on("click", function (evnt) {
    var navItem = $(evnt.target);
    if (navItem.attr("href") === undefined) {
      navItem = navItem.parent();
    }

    pushPage(navItem.attr("href"));
    return false;
  });
  window.addEventListener("popstate", function (evnt) {
    if (evnt.state) pushPage($(evnt.target).attr("href"));
  });
});
