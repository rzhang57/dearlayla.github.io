const textElement = document.getElementById("animated-text");
const startButton = document.getElementById("start-button");
const textToAnimate = "";
let charIndex = 0;

function revealText() {
    if (charIndex < textToAnimate.length) {
        textElement.textContent += textToAnimate.charAt(charIndex);
        charIndex++;
        setTimeout(revealText, 30); // Adjust the timeout to control animation speed
    }
}

startButton.addEventListener("click", () => {
    startButton.style.marginTop = "1920px"
    title.style.marginTop = "100px";
    title.style.marginLeft = "-300px"
    nav.style.marginTop = "50px";
    nav.style.marginLeft = "1000px"
    nav.style.opacity = "1";
    chanseyidle.classList.add("hidden");
    chanseyrun.style.opacity = "1";
    chanseyrun.style.marginLeft = "2000px";


    setTimeout(() => {
        startButton.classList.add("hidden");
        startButton.disabled = true;
        revealText(); 
    }, 750)

});
