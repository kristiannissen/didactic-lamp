/* viewport.js */

function onScrollStop(cb) {
  var s;
  window.addEventListener("scroll", function (evnt) {
    window.clearTimeout(s);

    s = setTimeout(function () {
      cb();
    }, 100);
  });
}

var isInViewport = function (elem) {
  var distance = elem.getBoundingClientRect();
  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};
