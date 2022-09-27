/*Init projects swiper */
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 80,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      980: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  function scrollDownSkills(){
    const skillSection = document.querySelector('.skills');
    const skillCardPosition = skillSection.getBoundingClientRect().top; 
    const skillCards = document.querySelectorAll('.skill-list');
    const topContainer = document.querySelector('.top-container')
    const bodyPosition = document.querySelector('body').getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
    if(skillCardPosition < screenPosition){
        skillCards.forEach(card =>{
                    card.classList.add('card-active')
                })
    } else {
            skillCards.forEach(card =>{
                card.classList.remove('card-active')
            })
        }
    //Top container box-shodow & BG 
    if(bodyPosition !== 0){
        topContainer.classList.add("active")
    }else{
        topContainer.classList.remove("active")
    }
}
//Scroll animations call
document.addEventListener('scroll', scrollDownSkills, 'once')