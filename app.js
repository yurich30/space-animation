const startButton = document.querySelector(".main__btn")
const earthImage = document.querySelector(".footer__image")
const spaceText = document.querySelector(".main__text")
const astronaut = document.querySelector(".main__img")

const clicked = () => {
    earthImage.classList.add("animate-earth");
    startButton.classList.add("hidden");
    spaceText.classList.add("animate-text")
    astronaut.classList.add("animate-astronaut")
}

addEventListener("click", clicked)