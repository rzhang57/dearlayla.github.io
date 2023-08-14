const textElement = document.getElementById("animated-text");
const startButton = document.getElementById("start-button");
const textToAnimate = "fjk;las fjskdl;a fdjsakl;fdsjalkfjk;las fjskdl;a fdjsakl;fdsjalkfjk;las fjskdl;a fdjsakl;fdsjalkfjk;las fjskdl;a fdjsakl;fdsjalkfjk;las fjskdl;a fdjsakl;fdsjalkfjk;las fjskdl;a fdjsakl;fdsjalkfjk;las fjskdl;a fdjsakl;fdsjalkfjk;las fjskdl;a fdjsakl;fdsjalkfjk;las fjskdl;a fdjsakl;fdsjalkfjk;las fjskdl;a fdjsakl;fdsjalkfjk;las fjskdl;a fdjsakl;fdsjalkfjk;las fjskdl;a fdjsakl;fdsjalkfjk;las fjskdl;a fdjsakl;fdsjalkfjk;las fjskdl;a fdjsakl;fdsjalkfjk;las fjskdl;a fdjsakl;fdsjalkfjk;las fjskdl;a fdjsakl;fdsjalkfjk;las fjskdl;a fdjsakl;fdsjalkfjk;las fjskdl;a fdjsakl;fdsjalkfjk;las fjskdl;a fdjsakl;fdsjalkfjk;las fjskdl;a fdjsakl;fdsjalkfjk;las fjskdl;a fdjsakl;fdsjalkfjk;las fjskdl;a fdjsakl;fdsjalkfjk;las fjskdl;a fdjsakl;fdsjalkfjk;las fjskdl;a fdjsakl;fdsjalkfjk;las fjskdl;a fdjsakl;fdsjalkfjk;las fjskdl;a fdjsakl;fdsjalkfjk;las fjskdl;a fdjsakl;fdsjalkfjk;las fjskdl;a fdjsakl;fdsjalkfjk;las fjskdl;a fdjsakl;fdsjalkfjk;las fjskdl;a fdjsakl;fdsjalkfjk;las fjskdl;a fdjsakl;fdsjalkfjk;las fjskdl;a fdjsakl;fdsjalkfjk;las fjskdl;a fdjsakl;fdsjalk";
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
    setTimeout(() => {
        startButton.classList.add("hidden");
        startButton.disabled = true;
        revealText(); 
    }, 750)

});
