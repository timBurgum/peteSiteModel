const navSlide = function(){
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const mainLogo = document.querySelectorAll(".mainLogo")[0];


    burger.addEventListener("click", function(){
    nav.classList.toggle("nav-active");
    //mainLogo.classList.toggle("new-logo-width");
    var logoDim = mainLogo.getBoundingClientRect();
    var navPosition = logoDim.height + 60;
    nav.style.top = navPosition + "px";
    //animate links incoming

    navLinks.forEach((link, index) => {
      if(link.style.animation)
      {
        link.style.animation = '';
      }
      else
      {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index/5 + 0.5}s`;
      }
    });

    //animate burger
    burger.classList.toggle("toggle");
  });

};

navSlide();
