const textElement = document.getElementById("animated-text");
const startButton = document.getElementById("start-button");
const textToAnimate = "HAIIII LAYLAAAAAA HAPPY 2 YEAR ANNIVERSARY BABY!!!!! oh! is that a shiny chansey????? that’s so rare right! hey where is it going! let’s ride this text together and try to catch up to it! shiny chansey sorta like you cuz u so precious and rare and i never want u to change (especially not evolve into shiny blissey (facepalm…).. anyways enough of this cornfest wish we could be together right and i know you wish that too but it’s no biggy hehe took the last few days to learn some javascript and website architecture stuff and this is the result aka the….. SECRET PROJECT HEHEHE but yeah, it’s been really boring without you around and honestly this was probably a decent way to spend my time instead of playing video games and stuff + i actually enjoyed doing this and learned a decent amount i guess hehe i’ll show you the source code one day i would love to explain this stuff to you if u wanna learn and maybe we build something together in our freetime :) these past two years have been the best two years of my entire life, without you, i feel empty, idek how lost i would be without you by my side to ground me and just be by my side to support me. i know the past two years haven’t exactly been ideal with IB and university and all, but i’m so excited to finally be able to go to the same school as you way i just know we’re gonna have so much fun (actually maybe not so much) studying our ahh’s off and stuff in the library and i can imagine you just sleeping on my shoulder on the bus back home after a long night of studying hehe that would be so cute :) speaking of cute UR THE CUTEST and idek how u just surprise me over and over again with how perfect you are for me and how well our values align and stuff :) hehe sorry if this letter is super duper scuffed btw i really shouldve spent more time actually writing this letter instead of making dis website…. hope you like it and it wasnt for nothing um… that sure would be awkward hehe hope you’re having an insane time at disney, i mean it sounds so good and i wish i could experience it with you but i just got stupid work dammit hehe but it’s chill tho just really boring without by best friend around you know how it goes lelel but i can’t wait for you to be back and we can somewhat return to our regular schedules and hang out more and also i can’t wait to experience school with you for the first time since elementary school that’s insane and i know it won’t all be fun and stuff but i’m just happy i get to see you and that cute face of yours almost everyday hehe but yeah God couldn’t have prepared anyone else better than you for me and i think we compliment each other so well i can’t wait for what the future may hold for us :) good or bad i’m still wildly excited to be able to spend the rest of my life with you literally, there hasn’t been a single time i’ve regretting going out with you even if it was just short or just boring and walking around the mall cuz we always manage to talk and laugh so much together it feels like we’ll never run out of stuff to talk about cuz that’s just how well we fit each other HEHE dang it i think i’m rambling but also i just wanted you to appreciate the site more with this recursive function i wrote to reveal each letter one at a time so u literally CANT skip any the words hehe but yeah you can explore this site a bit more if you’d like i really hope you like it and i spent an okay amount of time on it not to say im that happy with it yet but i think it was a decent start but yeah webdev = L but still a good skill for personal projects i guess but yeah also i was thinking to keep this site or some variation of it up in the future just to save some memories in a nerdy way on this or another website anyways sorry started rambling again, but yeah lemme show u the source code on this bad boy one day hehe and yea lets go places when ur back and also drake POG oki im not gonna waste any more of your precious time, especially not before ur second biggest day aka disney day 2 hehe enjoy ur time there and dont miss me too much LELELE but i miss you a lot if you couldnt tell oki im done with rambling i guess to sum it all up, my life has gotten infinitely better ever since you showed up and i can never be more grateful for all that you do for me. i love you so much layla, and i mean it everytime, happy anniversary from 2095.366 kilometeres away, talk to you soon my love :)                                                - Ryan";
const imageToRemove = document.getElementById("chanseyrun");
const hover = document.getElementById("hover");
const jazz = document.getElementById("music");
let charIndex = 0;
var isActive = true;

// Function to remove the image
function removeImage() {
    if (imageToRemove) {
        imageToRemove.parentNode.removeChild(imageToRemove);
    }
}

function revealText() {
    
    if (charIndex < textToAnimate.length) {
        textElement.textContent += textToAnimate.charAt(charIndex);
        charIndex++;
        setTimeout(revealText, 13); 
        
    }

}

startButton.addEventListener("click", () => {
    hover.currentTime = 0.0;
    hover.play();
    jazz.volume = 0.3;
    jazz.currentTime = 0;
    jazz.play();
    
    
    startButton.style.marginTop = "1920px"
    title.style.marginTop = "100px";
    title.style.marginLeft = "-350px"
    nav.style.marginTop = "50px";
    nav.style.marginLeft = "1000px"
    nav.style.opacity = "1";
    chanseyidle.classList.add("hidden");
    chanseyrun.style.opacity = "1";
    chanseyrun.style.marginTop = "5000px";


    setTimeout(() => {
        startButton.classList.add("hidden");
        startButton.disabled = true;
        revealText(); 
    }, 750)



});
