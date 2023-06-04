        var SlideBox= 1;
        SlidesShow(SlideBox);

        function PlusSlides(n) {
        SlidesShow(SlideBox += n);
        }

        function SlidesShow(n) {
        var i;
        var Slides = document.getElementsByClassName("SlidesBox");
        if (n > Slides.length) {SlideBox = 1}    
        if (n < 1) {SlideBox = Slides.length}
        for (i = 0; i < Slides.length; i++) {
            Slides[i].style.display = "none";  
        }
        Slides[SlideBox-1].style.display = "block";
        }
        //rating
        var slideIndex = 1;
        showSlides(slideIndex);
        
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }
        
        function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          var dots = document.getElementsByClassName("dot");
          if (n > slides.length) {slideIndex = 1}    
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";  
          }
          for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";
        }
        //showbox
        $(document).ready(function(){
        $(".btn").click(function(){
            $(".collapse").collapse('toggle');
        });
        
        $(".collapse").on('shown.bs.collapse', function(){   
            $(".btn").html("Show less-");
        });
        $(".collapse").on('hidden.bs.collapse', function(){
            $(".btn").html("Show more+");
        });
        });