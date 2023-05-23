(function () {
    const LOGIN = document.querySelector(".loginModal")
    const LOGIN_BACKGROUND = document.querySelector(".overlay")
    const PROFILE_BUTTON = document.querySelector(".profile__button")
    const LOGIN_CLOSE_BUTTON = document.querySelector(".loginModal__button__close")

    PROFILE_BUTTON.addEventListener("click", displayModal)
    LOGIN_CLOSE_BUTTON.addEventListener("click", hideModal)

    function displayModal() {
        LOGIN.classList.remove("hidden")
        LOGIN_BACKGROUND.classList.remove("hidden")
    }

    function hideModal() {
        LOGIN.classList.add("hidden")
        LOGIN_BACKGROUND.classList.add("hidden")
    }
})()
