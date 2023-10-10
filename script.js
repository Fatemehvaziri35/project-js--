'use strict'
// menu
const menuContainer = document.querySelector('.menu-container');

menuContainer.addEventListener('click', function () {
  this.classList.toggle('active');
});
// slider
const imgEl=document.querySelectorAll('.slider img')
const leftEl=document.querySelector('.left')
const rightEl=document.querySelector('.right')
const clockEl=document.querySelector('.clock')
let imgesEl=0

const sliderItem=setInterval(()=>{
    imgEl[imgesEl].classList.remove('active')
    imgesEl++
    if(imgesEl===2){
        imgesEl=0
    }
    imgEl[imgesEl].classList.add('active')

}, 2000)

clockEl.textContent=new Date().toLocaleTimeString()
let clockItem=setInterval(()=>{
    clockEl.textContent=new Date().toLocaleTimeString()
},1000)



leftEl.addEventListener('click',()=>{
    imgEl[imgesEl].classList.remove('active')
    imgesEl--
    if(imgesEl<0){
        imgesEl=imgEl.length-1
    }
    imgEl[imgesEl].classList.add('active')
})

rightEl.addEventListener('click',()=>{
    imgEl[imgesEl].classList.remove('active')
    imgesEl++
    if(imgesEl===2){
        imgesEl=0
    }
    imgEl[imgesEl].classList.add('active')
})
// explore
const buttonCard=document.querySelectorAll('.click')
for(let i=0; i<buttonCard.length; i++){
    buttonCard[i].addEventListener('click',()=>{
        buttonCard[i].closest('div').style.rotate='360deg'
        buttonCard[i].closest('div').style.background='wheat'
    })
}
// job list
const boxes=document.querySelectorAll('.box')

function scrollBox(){
    const trigger=window.innerHeight*0.7
    boxes.forEach((box)=>{
      const boxTop=box.getBoundingClientRect().top
      if( boxTop < trigger){
        box.classList.add('show')
      }else{
        box.classList.remove('show')
      }
    })
}
scrollBox()
window.addEventListener('scroll' , scrollBox)

//modal 
let overlay=document.querySelector('.overlay')
let openbtn=document.getElementById('button-modal')
let divmodal=document.querySelector('.div-modal')
let closebtn=document.getElementById('close-modal')
openbtn.addEventListener('click',()=>{
   divmodal.classList.add('show-modal')
   overlay.classList.add('show-modal')
})
closebtn.addEventListener('click',()=>{
    divmodal.classList.remove('show-modal')
    overlay.classList.remove('show-modal')    
})

// Clients 
document.getElementById('next').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('formList').scrollLeft += widthItem;
}
document.getElementById('prev').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('formList').scrollLeft -= widthItem;
}
//   loging
const passwordInput=document.querySelector('#password')
const usernameInput=document.querySelector('#email')
const loginInput=document.querySelector('#login')
const inputDiv=document.querySelectorAll('.input-field')
const showIcon=document.querySelector('#showIcon')
const loginBox=document.querySelector('.login-container')


showIcon.addEventListener('mouseenter',()=>{
    if(passwordInput.value){
       passwordInput.setAttribute('type','text')
       showIcon.setAttribute('class','bx bxs-hide')
    }
   })
   showIcon.addEventListener('mouseleave' ,()=>{
       passwordInput.setAttribute("type","password")
       passwordInput.setAttribute('class','bx bxs-show')
   
   })
loginInput.addEventListener('click', async()=>{
    if(usernameInput.value&&passwordInput.value){
        try{
            const response= await fetch('https://fakestoreapi.com/auth/login', {
                method:'POST',
                headers:{
                'Content-type':'application/json'
                },
                body:JSON.stringify({
                    username:usernameInput.value,
                    password:passwordInput.valueshowIcon.addEventListener('mouseenter' ,()=>{
    if(passwordInput.value){
    passwordInput.setAttribute("type","text")
    showIcon.setAttribute('class','bx bx-hide')
    }
})
                })
            })
            const data=await response.json()
            loginBox.innerHTML='<h1 class="logNote">Logged In</h1>'
        }catch(err){
            console.log(err)
            alert('Try Again')
        }
    }
    else(
        alert("fill the the blanks")
    )
})



