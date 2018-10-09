/******************************
 **** Dropdown Navigation *****
 ******************************/


options= {hover: true, coverTrigger: false}

mobilePptions = {}

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems, options);
});

// var instance = M.Dropdown.getInstance(elem);

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, mobilePptions);
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
