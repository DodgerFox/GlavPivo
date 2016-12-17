var gam = document.getElementById('gamburger');
var drop = document.getElementById('gamDropdown');
var near = document.querySelector('.headerMenuNear');
var elementsMenu = document.querySelectorAll('.headerMenuItems');
var i = false;
console.log(near);
if (window.innerWidth < 750) {
	Array.prototype.forEach.call(elementsMenu, function (element, i) {
	elementsMenu[i].addEventListener('mouseenter', function () {
			element.style.color = '#fff';
			console.log(element)
		})
	})
console.log('yes')
gam.addEventListener('click', function () {
	if (i == false) {
	      drop.style.display = 'block';
	      near.style.display = 'block';
	      i = true;
	  }
	else if (i == true) {
		  drop.style.display = 'none';
		  near.style.display = 'none';
		  i = false;
	  }
	    });}