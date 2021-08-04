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

const inViewport = (entries, observer) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
    });
  };
  
  const Obs = new IntersectionObserver(inViewport);
  const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options
  
  // Attach observer to every [data-inviewport] element:
  const ELs_inViewport = document.querySelectorAll('section');
  ELs_inViewport.forEach(EL => {
    Obs.observe(EL, obsOptions);
  });