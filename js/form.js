/**/
(function(self) {
  var f = self.document.querySelector("form");

  f.addEventListener("submit", function(evnt) {
    f.csrftoken.value = window._CSRF;
  }); 
})(this);
