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

$(document).ready(function() {
	var arr = [];
	var images = [
		"dylan-gillis-KdeqA3aTnBY-unsplash_450.jpg",
		"dylan-gillis-KdeqA3aTnBY-unsplash_327.jpg",
		"mediensturmer-aWf7mjwwJJo-unsplash_450.jpg",
		"mediensturmer-aWf7mjwwJJo-unsplash_327.jpg",
		"cytonn-photography-n95VMLxqM2I-unsplash_450.jpg",
		"cytonn-photography-n95VMLxqM2I-unsplash_327.jpg",
		"jesper-ladehoff_450.jpg",
		"jesper-ladehoff_327.jpg"
	];
	for (var i = 0; i < images.length; i++) {
		arr[i] = new Image();
		arr[i].src = "/img/"+ images[i];
	}
})

// jQuery navigation pushstate
function pushPage(uri, title) {
  $("#dyn-main").load(uri + " #dyn-main .container");
  window.history.pushState({ href: uri }, title, uri);
}
/*
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
*/