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

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, options);
});