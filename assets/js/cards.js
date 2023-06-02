(function () {
    (function () {
        let slideshowImages = document.querySelectorAll(".card__image")
        let slideshowButtons = document.querySelectorAll(".card__button")
        let slideshowContainer = document.querySelector(".card")
    
        slideshowButtons.forEach((button, index) => button.addEventListener("click", () => {
            slideshowImages[index].scrollIntoView(false)
        }))
    
        function nextSlide(event) {
            let currentButton = event.target
            let index = slideshowButtons.findIndex(slideshowButton => slideshowButton === currentButton)
            console.log(slideshowButtons)
        }
    })()
})()