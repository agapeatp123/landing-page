
if (window.innerWidth < 720) {
    rowArragementRemove ();} else {
    rowArragementAdd();
  }

$(window).resize(function () {
  if (window.innerWidth < 720) {
      rowArragementRemove ();} else {
      rowArragementAdd();
    }
 });

function rowArragementRemove(){
  $(".right-last").removeClass("order-last");
  $(".right-first").removeClass("order-first");
}

function rowArragementAdd(){
  $(".right-last").addClass("order-last");
  $(".right-first").addClass("order-first");
}


// Pagge Scrolling Down Effect
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
