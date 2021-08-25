/* floating-button.js */
(function(self) {
  var b = self.document.querySelector(".floating-button")
  self.window.addEventListener("hashchange", function(evnt) {
    var h = self.location.hash;
    if (h !== "") {
      b.classList.toggle("floating-button-show")
    }
  })
})(this)