/******************************
 **** Dropdown Navigation *****
 ******************************/


options= {hover: true, coverTrigger: false}


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems, options);
});


mobileOptions= {hover: false, coverTrigger: false}


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger-mobile');
  var instances = M.Dropdown.init(elems, mobileOptions);
});
// var instance = M.Dropdown.getInstance(elem);


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});


/*****************************
********** Slider ************
******************************/
slider_options = {height:600}

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, slider_options);
});


/******************************
 ********** Carousel **********
 ******************************/

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, options);
});


/******************************
 ********** Material-Box ******
 ******************************/

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems, options);
});
