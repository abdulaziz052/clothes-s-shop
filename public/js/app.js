// Responsive menu
let responsiveMenu = document.querySelector('#responsiveMenu')
let hamburgerMenu = document.querySelector('#hamburgerMenu')
let closeMenu = document.querySelector('#closeMenu')
let body = document.querySelector('body')

hamburgerMenu.addEventListener('click' , function() {
    responsiveMenu.classList.add('left-0')
    responsiveMenu.classList.remove('-left-full')
    body.classList.add('overflow-hidden')
})
closeMenu.addEventListener('click' , function(){
    responsiveMenu.classList.remove('left-0')
    responsiveMenu.classList.add('-left-full')
    body.classList.remove('overflow-hidden')
    
})


// Responsive menu


let info_btn = document.querySelectorAll("#info_btn")   
let info_box  = document.querySelectorAll("#info_box")

console.log(info_btn, info_box);

info_btn.forEach((item  , index)=>{
    item.addEventListener('click' , function(){
       info_box[index].classList.toggle('hidden')
    })
})

let activeBox = document.querySelectorAll('#activeBox')

activeBox.forEach((item,index)=>{
    item.addEventListener('click' , function(){
        activeBox.forEach((item , index) =>{
            item.classList.remove('active')
        })
        item.classList.add('active')
    })

})
let heroMain = document.querySelector('#hero-main-img')
let heroImg = document.querySelectorAll('#hero-img')

heroImg.forEach((item, index) =>{
    item.addEventListener('click' , function(){
        heroMain.src = heroImg[index].src
    })
})