var selDrop = document.querySelector('.select-wrap');
var selDropIn = document.querySelector('.netMarketsSelectInput');
var i = true;

Array.prototype.forEach.call(elements, function ( selDropIn, it) {
selDrop.addEventListener('click', function () {
	if (i == false) {
	      selDropIn[it].style.display = 'flex';
	      console.log(selDropIn);
	      i = true;
	  }
	else if (i == true) {
		  selDropIn.style.display = 'none';
		  i = false;
	  }
	    });

});