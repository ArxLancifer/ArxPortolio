/*Init projects swiper */
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 80,
    slidesPerGroup: 1,
    // loop: true,
    // loopFillGroupWithBlank: true,
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


// Type Animation
function delay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time);
    });
}
async function textTypeAnimation(txt, target_element, speed){
    let txt_array = txt.split("")
    for (let i=0; i<txt_array.length; i++) {
        await delay(speed);
        target_element.textContent+=txt_array[i]
    }
}

async function runTypeAnimation(){
    const textH1 = "Hi. I am Anestis";
    const textH2 = "Your next Web Developer";
   await textTypeAnimation(textH1, document.querySelector("#about-me h1"),80)
   await delay(500)
   await textTypeAnimation(textH2, document.querySelector("#about-me h2"),80)
}

runTypeAnimation();



// MailJS
document.querySelector(".sendMail").addEventListener("click",(e)=>{
  e.preventDefault()
  sendMail()
})

emailjs.init('v9d8T0AAgC80WuYjk');

async function sendMail(){
  const senderName = document.querySelector("#senderName").value;
  const senderMail = document.querySelector("#senderMail").value;
  const senderMessage = document.querySelector("#senderMessage").value;
  if(!senderName || !sendMail || !senderMessage){
    alert("Please fill up the form");
    return
  }
 let sendResponse = await emailjs.send("service_zlhq85p","template_bofut1c",{
  from_name: senderName,
  email_id: senderMail,
  message: senderMessage,
  });
 if(sendResponse.status == 200){
  alert("Mail has sent. I will contact you back as soon as possible!")
 }else alert("Something went wrong :(")
}


