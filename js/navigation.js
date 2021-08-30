/* Navigation */
document.addEventListener("DOMContentLoaded", function() {
	var b = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
	if (b.length > 0) {
		b.forEach(function(elm) {
			elm.addEventListener("click", function() {
				var t = document.getElementById(elm.dataset.target)
				elm.classList.toggle("is-active")
				t.classList.toggle("is-active")
			})
		})
	}
})