const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        autoplay: true,
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              centerMode: false,
              arrows: false,
              dots: true,
            }
          },
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 1,
              arrows: false,
              dots: false,
              slidesToScroll: 1,
              infinite: true,
            }
          },
        ]
    });
})  

$(".slider-item").each(function(){
    let count =  $(this).children(".stars-box").data("count");
    $(this).children(".stars-box").children(".star").slice(0, count).css("display", "block");
});


