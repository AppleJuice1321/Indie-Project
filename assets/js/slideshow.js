(function () {
    let slideshowImages = document.querySelectorAll(".slideshow__image")
    let slideshowButtons = document.querySelectorAll(".slider__button")
    let slideshowContainer = document.querySelector(".slideshow")

    slideshowButtons.forEach((button, index) => button.addEventListener("click", () => {
        slideshowImages[index].scrollIntoView(false)
    }))

    function nextSlide(event) {
        let currentButton = event.target
        let index = slideshowButtons.findIndex(slideshowButton => slideshowButton === currentButton)
        console.log(slideshowButtons)
    }

    // skal rulle til næste slide når der trykkes på knapperne 1 2 3 4 5 knap  ->  1 2 3 4 5 slide
    // skal automatisk rulle til næste slide efter 2 sekunder
    // er automatikken nået til slutningen? startes den forfra

})()
