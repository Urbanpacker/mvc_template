$(function() {
    $("a").on('click', function(event) {
        let addOffsetTop = 0;
        let speedScroll = 600;
        if (this.hash !== "") {
          // bloquer le changement de page
          //event.preventDefault();
          let hash = this.hash;
          $('html, body').animate({scrollTop: $(hash).offset().top - addOffsetTop}, speedScroll, function(){
                if(addOffsetTop == 0){
                    window.location.hash = hash;
                }
          });
        }
    });
});