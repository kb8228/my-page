$(document).ready(function(){
  $(function() {
    $('a[href*=#]:not([href=#]):not([href=#openModal])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          console.log(target);
          var offSet = target.offset().top - 50;
          $('html,body').animate({
            scrollTop: offSet
          }, 1000);
          return false;
        }
      }
    });
  });
});