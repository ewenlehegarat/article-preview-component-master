const myShare = document.querySelector('.circle_icon_share')
const myIconShare = document.querySelector('.icon_share')
const share = document.querySelector('.share')

let isClosed = true

myShare.addEventListener('click', function(){
    if(isClosed){
        share.style.display = 'flex'
        myShare.style.backgroundColor = 'hsl(217, 19%, 35%)'
        myIconShare.style.filter = 'brightness(100)'
    }
    if(!isClosed){
        share.style.display = 'none'
        myShare.style.backgroundColor = 'hsl(210, 46%, 95%)'
        myIconShare.style.filter = 'none'
    }
    isClosed = !isClosed
})

myShare.addEventListener('mouseover', function(){
    myShare.style.backgroundColor = 'hsl(217, 19%, 35%)'
    myIconShare.style.filter = 'brightness(100)'
    myShare.addEventListener('mouseout', function(){
        myShare.style.backgroundColor = 'hsl(210, 46%, 95%)'
        myIconShare.style.filter = 'none'
    })
})