const contBlock = document.getElementById("conts")
const main = document.querySelector('main')
const button = document.getElementById('but')
let stat = 0

function showContacts(){
    contBlock.style.visibility = 'visible'
    main.style.filter = 'blur(5px)'
    document.querySelector('header').style.filter = 'blur(5px)'
    document.body.style.overflow = 'hidden'
    stat = 1
}
function hideContacts(){
    contBlock.style.visibility = 'hidden'
    main.style.filter = 'blur(0px)'
    document.querySelector('header').style.filter = 'blur(0px)'
    document.body.style.overflow = 'auto'
    stat = 0
}

document.onclick = function (ev) {

    if (ev.target.id != contBlock.id && ev.target.id != button.id && contBlock.style.visibility == 'visible') {
        if(ev.target.id != document.getElementById('li').id){
        hideContacts()
        }
    }
}
i = 1
var image = document.getElementById("photo");
var images = new Array('image.png','image2.png','image3.png')
function NextImage(){
    if(i > images.length - 1){
        i = 0
    }
    image.src = images[i]
    i++
}    