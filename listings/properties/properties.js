
$('.slider-single').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: true,
 fade: false,
 adaptiveHeight: true,
 infinite: false,
 useTransform: true,
 speed: 400,
 cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
});

$('.slider-nav')
 .on('init', function(event, slick) {
   $('.slider-nav .slick-slide.slick-current').addClass('is-active');
 })
 .slick({
   slidesToShow: 8,
   slidesToScroll: 8,
   dots: false,
   focusOnSelect: false,
   infinite: false,
   responsive: [{
     breakpoint: 1024,
     settings: {
       slidesToShow: 5,
       slidesToScroll: 5,
     }
   }, {
     breakpoint: 640,
     settings: {
       slidesToShow: 4,
       slidesToScroll: 4,
     }
   }, {
     breakpoint: 420,
     settings: {
       slidesToShow: 3,
       slidesToScroll: 3,
   }
   }]
 });

$('.slider-single').on('afterChange', function(event, slick, currentSlide) {
 $('.slider-nav').slick('slickGoTo', currentSlide);
 var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
 $('.slider-nav .slick-slide.is-active').removeClass('is-active');
 $(currrentNavSlideElem).addClass('is-active');
});

$('.slider-nav').on('click', '.slick-slide', function(event) {
 event.preventDefault();
 var goToSingleSlide = $(this).data('slick-index');

 $('.slider-single').slick('slickGoTo', goToSingleSlide);
});

// **************Tab section*************** //
var tabs = document.querySelectorAll(".tabs li");
var infoSections = document.querySelectorAll(".infoSection");
console.log(infoSections);
for(var i = 0; i<tabs.length;i++)
{
  document.querySelectorAll(".tabs li")[i].addEventListener("click", function(e){
    //remove colours for all tabs
    for(var i = 0; i<tabs.length;i++)
    {
      document.querySelectorAll(".tabs li")[i].classList.remove('chosenTab');
    }
    //add colour to correct tab
    this.classList.add('chosenTab');
    // make correct sections acrive/hidden
    //hide all sections
    for(var n = 0; n<tabs.length;n++)
    {
      infoSections[n].classList.remove('active');
      infoSections[n].classList.add('hidden');
    }
    //open up selected section
    if(this.innerHTML == "Map")
    {
      infoSections[2].classList.add('active');
    }
    if(this.innerHTML == "Property Details")
    {
      infoSections[0].classList.add('active');
    }
    if(this.innerHTML == "Layout")
    {
      infoSections[1].classList.add('active');
    }
  });
}
