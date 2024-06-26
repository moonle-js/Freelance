var hamburger = document.querySelector('#hamburger')

hamburger.addEventListener('click', function(){
    if(document.querySelector('.nav_elements').style.display == "none" || ! document.querySelector('.nav_elements').style.display){
        document.querySelector('.nav_elements').style.display = "flex"
        document.querySelector('.callUs').style.display = "flex"
    }else{
        document.querySelector('.nav_elements').style.display = "none"
        document.querySelector('.callUs').style.display = "none"
    }
})

// form

var firstName = document.querySelector('#firstName')
var lastName = document.querySelector('#lastName')
var email = document.querySelector('#email')
var company = document.querySelector('#company')


var inputElements = document.querySelectorAll('.inputs div').forEach((item) => {
    item.querySelector('input').addEventListener('click', function(){
        this.parentNode.querySelector('span').style.display = 'flex'
    })
})


var header = document.querySelector('header');

window.addEventListener('scroll', function(e){
    if(this.pageYOffset > 0){
        header.style.background = '#297C6B'
        document.querySelector('.callUs').style.display = "none"
    }else{
        header.style.background = 'transparent'
        document.querySelector('.callUs').style.display = "flex"
    }
})


// Swiper

var image = document.querySelector('.image')
var nameOfUser = document.querySelector('.swiper_elements article h4')
var contentOfUser = document.querySelector('.swiper_elements article p')

var activeButtons = document.querySelectorAll('.swiper_nav div')

var swipeLeftButton = document.querySelector('.swipe_left')
var swiperightButton = document.querySelector('.swipe_right')

var contexts = [
    {
        name: "Alice Cendy",
        text: "I have been caring for my mom & dad off and on for about 10 years now, and I know the importance of me being there for appointments. Older people need attention, love and care that they truly deserve.",
        image: "./assets/images/alice.png"
    },
    {
        name: "Alex Askarov",
        text: "I am Alex Askarov",
        image: "./assets/images/max.png"
    },
    {
        name: "Abbie Harvey",
        text: "I am ali huseynov",
        image: "./assets/images/natali2.png"
    }
]
var styles = {
    backgroundPosition: `center`,
    height:"100%",
    maxWidth: "250px",
    maxHeight: "250px",
    width: '30%',
    borderTopLeftRadius: `4px`,
    borderBottomLeftRadius: `4px`,
    backgroundSize: "contain",
    backgroundRepeat: 'no-repeat'
}
window.onload = function(){
    document.querySelector('.swiper_elements').innerHTML = `
        <div class="image"></div>
        <article>
            <img src="./assets/images/column.png" alt="">
            <h4>
                ${contexts[0].name}
            </h4>

            <p>
                ${contexts[0].text}
            </p>
        </article>
    `
    document.querySelector('.image').style.background = `url(${contexts[0].image})`
    Object.assign(document.querySelector('.image').style, styles)
}

var count = 0;

function setElements(number){
    document.querySelector('.swiper_elements').innerHTML = `
        <div class="image"></div>
        <article>
            <img src="./assets/images/column.png" alt="">
            <h4>
                ${contexts[number].name}
            </h4>

            <p>
                ${contexts[number].text}
            </p>
        </article>
    `
    
    document.querySelector('.image').style.background = `url(${contexts[number].image})`

    Object.assign(document.querySelector('.image').style, styles)
}



swipeLeftButton.addEventListener('click', function(){
    if(count == 0){
        count = 2
    }else{
        count--
    }
    setElements(count)
    activeButtons.forEach(item => {
        item.classList.remove('activeDiv')
    })
    activeButtons[count].classList.add('activeDiv')

})

swiperightButton.addEventListener('click', function(){
    if(count == 2){
        count = 0
    }else{
        count++
    }
    setElements(count)
    activeButtons.forEach(item => {
        item.classList.remove('activeDiv')
    })
    activeButtons[count].classList.add('activeDiv')
})

document.querySelector('.swipe_left').addEventListener('mouseenter', function(){
    this.querySelector('img').src = "./assets/images/hoverSwipe.png"
})
document.querySelector('.swipe_left').addEventListener('mouseleave', function(){
    this.querySelector('img').src = "./assets/images/swipe_left.svg"
})

document.querySelector('.swipe_right').addEventListener('mouseenter', function(){
    this.querySelector('img').src = "./assets/images/hoverSwipeRight.png"
})
document.querySelector('.swipe_right').addEventListener('mouseleave', function(){
    this.querySelector('img').src = "./assets/images/swipe_right.png"
})

window.onresize = function(){
    var px = window.innerWidth
    document.querySelector('.columnGreen').style.transform = `translateX(${px - 1440}px)`
    document.querySelector('.videoColumn').style.transform = `translateX(${px - 1440}px)`
}




document.querySelector('.rihtSideButton').addEventListener('mouseenter', function(){
    document.querySelector('.play_btn').style.transform = "scale(1.1)"
})
document.querySelector('.rihtSideButton').addEventListener('mouseleave', function(){
    document.querySelector('.play_btn').style.transform = "scale(1)"
})


// Showing video

document.querySelector('.rihtSideButton').addEventListener('click', function(){
    document.querySelector('.videoSection').style.display = "flex"
    document.querySelector('#video').style.display = "flex"
    setTimeout(function(){
        document.querySelector('#video').play()
    },500)
    document.querySelector('body').style.overflow = "hidden"
})

document.querySelector('.videoSection span').addEventListener('click', function(){
    document.querySelector('.videoSection').style.display = "none"
    document.querySelector('#video').style.display = "none"
    document.querySelector('#video').pause()
    document.querySelector('body').style.overflow = "hidden"
})