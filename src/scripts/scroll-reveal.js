// REVEAL ELEMENTS ON SCROLL //

$(window).scroll(function () {
    var revealEl = $(".scroll-reveal");
    var currScrollPos = $(window).scrollTop() + $(window).height();
  
  revealEl.each(function() {
      var $this = $(this),
          elemOffsetTop = $this.offset().top + 20;
      
      if (currScrollPos > elemOffsetTop) 
          $this.css("opacity", 0 + (currScrollPos - elemOffsetTop)/400);
  })
})