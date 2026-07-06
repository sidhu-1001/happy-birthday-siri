/* ==========================================
   birthday.js
   birthday.exe v3.1
========================================== */



const message = document.getElementById("birthday-message");
const arrow = document.querySelector("#birthday-screen .continue");
const cake = document.querySelector(".cake");

const lines = [

    "I wanted your birthday",
    "to be a little different.",
    "",
    "So...",
    "",
    "instead of just",
    "sending another message,",
    "",
    "I built something",
    "just for you. ❤️"

];

let lineIndex = 0;
let charIndex = 0;
let output = "";
let finished = false;
let typing = false;

/* ==========================================
   TYPEWRITER
========================================== */

function typeLine(){

    if(lineIndex >= lines.length){

        finishAnimation();

        return;

    }

    const current = lines[lineIndex];

    /* Empty line = paragraph gap */

    if(current === ""){

        output += "<br><br>";

        lineIndex++;

        setTimeout(typeLine,250);

        return;

    }

    if(charIndex < current.length){

        output += current.charAt(charIndex);

        message.innerHTML =
            output +
            "<span class='typing'></span>";

        charIndex++;

        const speed =
            current.charAt(charIndex) === " "
            ? 20
            : 36;

        setTimeout(typeLine,speed);

    }

    else{

        output += "<br>";

        if(lineIndex === 8 && cake){

            cake.classList.add("sparkle");

            setTimeout(()=>{

                cake.classList.remove("sparkle");

            },900);

        }

        lineIndex++;

        charIndex = 0;

        setTimeout(typeLine,320);

    }

}

/* ==========================================
   FINISH
========================================== */

function finishAnimation(){

    finished = true;

    typing = false;

    message.innerHTML = output;

    setTimeout(()=>{

        arrow.classList.add("show");

    },500);

}

/* ==========================================
   START
========================================== */

export function startBirthday(){

    finished = false;

    typing = true;

    lineIndex = 0;

    charIndex = 0;

    output = "";

    message.innerHTML = "";

    arrow.classList.remove("show");

    if(cake){

        cake.classList.remove("sparkle");

    }

    typeLine();

}

/* ==========================================
   NEXT
========================================== */

arrow.onclick = () => {

    if(!finished){

        return;

    }

    window.nextScreen();

};