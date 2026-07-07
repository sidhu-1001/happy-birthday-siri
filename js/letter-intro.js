/* ==========================================
   letter-intro.js
   birthday.exe v3.0
========================================== */


const text = document.getElementById("letter-intro-text");
const button = document.getElementById("open-letter");

const lines = [

    "Decrypting private message...",

    "",

    "Verification complete.",

    "",

    "This letter",

    "was written only",

    "for you ❤️"

];

let lineIndex = 0;
let charIndex = 0;
let output = "";
let finished = false;

/* ==========================================
   TYPEWRITER
========================================== */

function typeLine(){

    if(lineIndex >= lines.length){

        finish();

        return;

    }

    const current = lines[lineIndex];

    if(charIndex < current.length){

        output += current.charAt(charIndex);

        text.innerHTML =

            output +

            "<span class='typing'></span>";

        charIndex++;

        const speed =

            current.charAt(charIndex) === " "

            ? 22

            : 38;

        setTimeout(typeLine, speed);

    }

    else{

        output += "<br>";

        if(current === ""){

            output += "<br>";

        }

        lineIndex++;

        charIndex = 0;

        setTimeout(typeLine, 380);

    }

}

/* ==========================================
   FINISH
========================================== */

function finish(){

    finished = true;

    text.innerHTML = output;

    button.disabled = false;

    button.classList.add("show");

}

export function startPersonalLetter() {

    const screen = document.getElementById("letter-screen");

    // Reset all scrolling
    screen.scrollTop = 0;

    const paper = document.querySelector(".letter-paper");
    if (paper) paper.scrollTop = 0;

    window.scrollTo(0,0);

    // your remaining code...
}
/* ==========================================
   START
========================================== */

export function startLetterIntro(){
    console.log("Letter Intro Started");

    finished = false;

    output = "";

    lineIndex = 0;

    charIndex = 0;

    text.innerHTML = "";

    button.disabled = true;

    button.classList.remove("show");

    typeLine();

}

/* ==========================================
   OPEN LETTER
========================================== */

button.addEventListener("click",()=>{

    if(!finished){

        return;

    }

    button.style.transform = "scale(.95)";

    setTimeout(()=>{

        window.nextScreen();

    },250);

});