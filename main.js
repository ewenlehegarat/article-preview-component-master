const myShare = document.querySelector('.circle_icon_share')
const share = document.querySelector('.share')

myShare.addEventListener('click', function(){
    if(share.style.opacity === '1'){
        share.style.opacity = '0'
    }else{
        share.style.opacity = '1'
    }
})