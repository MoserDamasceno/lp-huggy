document.addEventListener("DOMContentLoaded", function(event) {
        
    document.addEventListener('scroll', function(e) {
        var scrollTop = window.scrollY;
        var header = document.querySelector('#header');
        if (scrollTop > 120) {
          header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });


});