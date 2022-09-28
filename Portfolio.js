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
    const topContainer = document.querySelector('#home')
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


//Dropdown menu
function dropdown(){
  const menu = document.querySelector('.drop-down-small-screen');
  menu.classList.toggle("active");
}
document.querySelector(".bi-list").addEventListener('click', dropdown)
document.addEventListener('click',(e)=>{
  // if(!e.target.classList.value.includes('bi')){
  //     const menu = document.querySelector('.drop-down-small-screen');
  //     menu.classList.remove("active");
  // }
  menu.classList.remove("active");
})

function autoTyping(){
  const myName = document.querySelector("#about-me h1");
  const iDev = document.querySelector("#about-me h2");
  
}

const typeInterval = setInterval(autoTyping,200)